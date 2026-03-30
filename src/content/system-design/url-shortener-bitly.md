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
- **URL Shortening:** Given a long URL, return a shorter, unique alias (e.g., `bit.ly/xyz123`).
- **Redirection:** When a user clicks a short URL, they should be redirected to the original long URL.
- **Custom Aliases:** Users should optionally be able to specify a custom alias (e.g., `bit.ly/my-portfolio`).
- **Expiration:** Links should have a default expiration time; users should be able to specify an expiration date.

### Non-Functional Requirements
- **High Availability:** The system must be highly available (redirection is critical).
- **Low Latency:** Redirection should happen with minimal delay.
- **Scalability:** Should handle millions of shortening requests and billions of clicks per day.
- **Read-Heavy:** Link redirection (Reads) will be far more frequent than link creation (Writes) with a 100:1 ratio.

## 2. Capacity Estimation & Constraints

- **Traffic:** Assume 100M new URLs per month (~40 per second).
- **Read/Write Ratio:** 100:1 (10B redirections per month, ~4k per second).
- **Storage:** 100M * 500 bytes per entry = 50GB per month. Over 5 years: ~3TB.
- **Bandwidth:** 
    - Write: 100M / (30 days * 24h * 3600s) * 500 bytes ≈ 19 KB/s.
    - Read: 10B / (30 * 24 * 3600) * 500 bytes ≈ 1.9 MB/s.

## 3. API Design

### Shorten URL
`POST /api/v1/shorten`
- **Request Body:** `{ "long_url": "string", "custom_alias": "string?", "expire_date": "timestamp?" }`
- **Response Body:** `{ "short_url": "string" }`

### Redirect
`GET /{short_url_id}`
- **Response:** `301 Moved Permanently` (for SEO) or `302 Found` (for tracking).

## 4. High-Level Architecture

1. **Client** sends long URL to **Load Balancer**.
2. **Web Servers** handle the request and interact with the mapping services.
3. **Key Generation Service (KGS)**: To ensure uniqueness, we can have a separate service that pre-generates unique 6-7 character strings and stores them in a "Key-DB".
4. **Database**: Store the mapping of `short_url -> long_url`. **NoSQL Key-Value store** (like DynamoDB or Cassandra) is suitable for high-scale mapping.
5. **Caching**: Use **Redis** to store frequently accessed URLs (LRU policy) to minimize DB hits and reduce latency.

## 5. Detailed Component Design

### ID Generation Strategy
How do we ensure unique 7-character IDs?
- **Hashing (MD5/SHA)**: Take the first 7 chars of the hash. Collision handling is required.
- **Base62 Encoding**: Convert a unique 64-bit integer (from a Snowflake ID generator or KGS) to Base62 (`[a-zA-Z0-9]`). A 7-character string gives $62^7 \approx 3.5$ trillion combinations.

### Data Partitioning
To scale the DB, we can partition by:
- **Range-Based:** (A-M, N-Z) - can lead to unbalanced loads (hot characters).
- **Hash-Based:** Hash the `short_url_id` to determine the shard, ensuring even distribution.

## 6. Trade-offs & Future Scaling
- **301 vs 302 Redirects**: 301 is permanent, better for SEO. 302 is temporary, better for analytics tracking as every click goes through the server.
- **Cache Eviction**: Use an **LRU (Least Recently Used)** policy. Caching 20% of the daily traffic usually handles 80% of requests (Pareto Principle).
- **Fail-Open Policy**: If the rate limiter or cache is down, we often fallback to the DB or allow the request to maintain user experience.

---
*This architectural deep-dive was generated with the System Design Architect AI skill.*
