---
title: "Design a URL Shortener (Bitly)"
date: 2026-03-29
tags: ["System Design", "Scalability", "API Design"]
description: "How to design a high-scale URL shortening service similar to Bitly or TinyURL."
---

## 1. Requirements

### Functional Requirements
- **URL Shortening:** Given a long URL, return a shorter, unique alias.
- **Redirection:** When a user clicks a short URL, they should be redirected to the original long URL.
- **Custom Aliases:** Users should optionally be able to specify a custom alias.
- **Expiration:** Links should have a default expiration time; users should be able to specify an expiration date.

### Non-Functional Requirements
- **High Availability:** The system must be highly available (people click links all the time).
- **Low Latency:** Redirection should happen with minimal delay.
- **Scalability:** Should handle millions of shortening requests and billions of clicks per day.
- **Read-Heavy:** Link redirection (Reads) will be far more frequent than link creation (Writes).

## 2. Capacity Estimation & Constraints

- **Traffic:** Assume 100M new URLs per month.
- **Read/Write Ratio:** 100:1 (10B redirections per month).
- **Storage:** 100M * 500 bytes per entry = 50GB per month. Over 5 years: ~3TB.
- **Bandwidth:** 
    - Write: 100M / (30 days * 24h * 3600s) * 500 bytes ≈ 19 KB/s.
    - Read: 10B / (30 * 24 * 3600) * 500 bytes ≈ 1.9 MB/s.

## 3. API Design

### Shorten URL
`POST /api/v1/shorten`
- **Request Body:** `{ long_url: string, custom_alias?: string, expire_date?: timestamp }`
- **Response Body:** `{ short_url: string }`

### Redirect
`GET /{short_url_id}`
- **Response:** `302 Redirect` to the original long URL.

## 4. Database Design

Since we need to store billions of records and don't need complex relationships, a **NoSQL Key-Value store** (like DynamoDB or Cassandra) or a partitioned **Relational Database** is suitable.

**Schema:**
- `short_url_id` (PK): string (6-8 characters)
- `original_url`: string
- `user_id`: int
- `created_at`: timestamp
- `expire_at`: timestamp

## 5. High-Level Architecture

1. **Client** sends long URL to **Load Balancer**.
2. **Web Servers** handle the request.
3. **Key Generation Service (KGS)**: To ensure uniqueness, we can have a separate service that pre-generates unique 6-character strings and stores them in a "Key-DB".
4. **Database**: Store the mapping of `short_url -> long_url`.
5. **Caching**: Use **Redis** to store frequently accessed URLs to minimize DB hits and reduce latency.

## 6. Detailed Design Issues

### Encoding
We can use **Base62** [a-z, A-Z, 0-9] to represent the IDs.
- A 7-character string gives $62^7 \approx 3.5$ trillion combinations.

### Data Partitioning
To scale the DB, we can partition by:
- **Range-Based:** (A-M, N-Z) - can lead to unbalanced loads.
- **Hash-Based:** Hash the `short_url_id` to determine the shard.

### Caching Strategy
- Use an **LRU (Least Recently Used)** eviction policy.
- Cache 20% of the daily traffic to handle 80% of requests (Pareto Principle).
