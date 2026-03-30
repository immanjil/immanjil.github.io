---
title: "System Design: URL Shortener (Bitly)"
description: "A deep dive into building a high-scale URL shortening service like Bitly, focusing on unique ID generation and low-latency redirection."
pubDate: 2026-03-29
tags: ["system-design", "scalability", "redis", "nosql", "hashing"]
image: "/assets/url-shortener-architecture.png"
category: "System Design"
---

# Overview
A URL shortener like Bitly or TinyURL is a classic system design problem that touches on key concepts: unique ID generation, read-heavy caching, and high-performance redirection.

## 1. Requirements

### Functional Requirements
- **URL Shortening:** Convert a long URL into a unique 7-character short link (e.g., `bit.ly/xyz123`).
- **Redirection:** Redirect users to the original long URL upon visiting the short link.
- **Custom Slugs:** Support user-defined aliases (e.g., `bit.ly/my-portfolio`).
- **Expiration:** Links persist for a default (e.g., 5 years) or custom duration.

### Non-Functional Requirements
- **High Availability:** 99.99% uptime for redirection (mission-critical).
- **Low Latency:** Redirection process should complete in **< 200ms**.
- **Scalability (Daily):** 
    - **Writes:** 10 million new URLs per day.
    - **Reads:** 1 billion clicks per day.
- **Read-Heavy:** Optimized for a 100:1 read-to-write ratio.

### CAP Theorem Trade-offs
- **AP for Redirection:** Prioritize Availability and Partition Tolerance. It's better to serve a redirect even if the data is slightly stale (rare for this use case).
- **CP for Creation:** Prioritize Consistency and Partition Tolerance during URL creation to ensure unique IDs and custom slugs are never duplicated across the distributed system.

## 2. API Design

### Create Shortened URL
`POST /api/v1/shorten`
- **Request Body:**
    ```json
    {
      "long_url": "string",
      "custom_alias": "string?",
      "expire_at": "timestamp?"
    }
    ```
- **Response Body:**
    ```json
    {
      "short_url": "string",
      "created_at": "timestamp"
    }
    ```

### Redirect Short Link
`GET /{short_code}`
- **Response:**
    - `301 Moved Permanently`: Optimized for SEO (browsers cache the redirect).
    - `302 Found`: Optimized for analytics (every click hits our server for tracking).
    - `404 Not Found`: Returned if the short code is invalid or expired.

## 3. Capacity Estimation & Constraints

Based on our target scale of **10 million new URLs** and **1 billion clicks** per day:

### 1. QPS (Queries Per Second)
- **Writes:** 10,000,000 / (24 * 3600) ≈ **116 URLs/sec**.
- **Reads:** 1,000,000,000 / (24 * 3600) ≈ **11,574 clicks/sec**.
- **Peak Load (approx. 5x):** ~600 writes/sec and **~60k reads/sec**.

### 2. Storage Requirements (5 Years)
- **Daily Storage:** 10M * 500 bytes per entry = **5 GB/day**.
- **Total Storage (5 Years):** 5 GB * 365 * 5 ≈ **9.1 TB**.

### 3. Bandwidth Constraints
- **Write Bandwidth:** 116 * 500 bytes ≈ **58 KB/sec**.
- **Read Bandwidth:** 11,574 * 500 bytes ≈ **5.8 MB/sec**.

### 4. Cache Memory (80/20 Rule)
- To handle 80% of daily traffic via cache, we cache 20% of the daily clicks.
- **Cache Required:** 200 million unique redirects * 500 bytes ≈ **100 GB** of RAM.

## 4. High-Level Architecture

For a system at this scale (10M writes/1B reads per day), we use a distributed, decoupled architecture:

1.  **Load Balancer:** Standard entry point to distribute traffic across stateless web servers.
2.  **Application Servers (Stateless):** Handle requests, validate URLs, and interact with the data services.
3.  **Key Generation Service (KGS):** A standalone service that pre-generates unique 7-character strings and stores them in a memory-efficient "Key-DB". This prevents ID collisions during high-concurrency writes.
4.  **Distributed Cache (Redis):** To achieve our **< 200ms latency** target, we cache the most frequently accessed `short_code -> long_url` mappings using an **LRU (Least Recently Used)** policy.
5.  **NoSQL Database (DynamoDB/Cassandra):** A horizontally scalable store for our 9.1TB of data. 
    - **Why NoSQL?** Native horizontal scaling, automatic sharding, and consistent performance for single-key lookups ($O(1)$) compared to the overhead of an RDBMS (like MSSQL) at this massive scale.
6.  **Analytics Service (Async):** Redirection logs are pushed to a **Message Queue (Kafka)** and processed asynchronously to provide click statistics without slowing down the redirection flow.

## 5. Detailed Component Design

### 1. ID Generation Strategy (KGS)
To avoid collisions across multiple servers, we use a standalone **Key Generation Service (KGS)**:
- **Base62 Encoding:** Using `[a-z, A-Z, 0-9]` gives us $62^7 \approx 3.5$ trillion unique combinations.
- **Pre-generation:** KGS pre-generates 7-character strings and stores them in a memory-efficient "Key-DB".
- **Batching:** Application servers pull batches of keys (e.g., 1000) into memory to reduce DB round trips, ensuring super-fast writes ($O(1)$).

### 2. Database Sharding & Data Partitioning
To handle 9.1TB of data, we must shard the database:
- **Hash-Based Sharding:** We hash the `short_code` to determine the shard, ensuring even distribution of data.
- **Consistent Hashing:** We use consistent hashing to map `short_code` to specific shards, which minimizes data movement when adding or removing database nodes.

### 3. Redirection Flow & Caching
To achieve our **< 200ms** latency target:
1. **Cache Hit:** Check **Redis Cache** ($O(1)$). If found, return `301/302` redirect immediately.
2. **Cache Miss:** Query the **NoSQL DB** using the `short_code` as the partition key ($O(1)$).
3. **Update & Return:** Store the mapping back in Redis and redirect the user.

### 4. Asynchronous Analytics
Redirection events (IP, User-Agent, Timestamp) are pushed to a **Kafka** topic. A separate consumer service processes these events and updates an analytics store (e.g., **ClickHouse** or **Elasticsearch**) for user-facing dashboards.

## 6. Trade-offs & Future Scaling

### 1. 301 vs. 302 Redirects
We've opted for **302 Found** redirects by default:
- **Trade-off:** While 301 (Permanent) is better for SEO and reduces server load, 302 ensures that every click hits our servers. This is critical for providing real-time, accurate analytics to our users, even if it adds more load to our Redis cache.

### 2. Consistency vs. Latency (AP vs. CP)
By choosing an **AP system for redirection**, we prioritize availability and sub-200ms latency:
- **Trade-off:** In extremely rare cases, a user might receive a 404 for a few milliseconds if a link is accessed before the NoSQL database has fully replicated across all nodes. We accept this occasional "Eventual Consistency" to ensure 99.99% redirection uptime.

### 3. Cache Eviction Strategy
We use a **Least Recently Used (LRU)** policy for our 100GB Redis cache:
- **Trade-off:** Viral links stay in memory, but "long-tail" links that are rarely clicked will require a database hit. This is the most cost-effective way to manage RAM while maintaining high performance for 80% of our traffic.

### 4. Future Scaling: Global Distribution
To further reduce latency below 200ms for international users, we can:
- **Geo-Sharding:** Deploy read-replicas and Redis clusters in multiple AWS regions (e.g., US-East, EU-West, Asia-Pacific).
- **Global Accelerator:** Use Anycast IP to route users to the nearest healthy endpoint.
- **Cleanup Service:** Implement a TTL (Time-To-Live) based background job to prune expired links from the 9.1TB database to manage storage growth and costs.

---
*This architectural deep-dive was collaboratively designed by the user and the System Design Architect AI skill through a structured 6-step interactive process.*
