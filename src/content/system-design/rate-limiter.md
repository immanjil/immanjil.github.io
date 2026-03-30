---
title: "System Design: Distributed Rate Limiter"
description: "How to design a scalable, high-availability rate limiter for a multi-tenant microservices architecture."
pubDate: 2026-03-29
tags: ["system-design", "redis", "scalability", "distributed-systems"]
image: "/assets/rate-limiter-architecture.png"
category: "System Design"
---

# Overview
A rate limiter is a critical component for protecting services from being overwhelmed by too many requests. Whether it's to prevent DDoS attacks, manage costs, or ensure fair usage, designing a *distributed* rate limiter requires careful consideration of consistency and performance.

## 1. Requirements
### Functional
- Limit requests based on user ID or IP address (e.g., 100 requests per minute).
- Handle multiple servers (Distributed).
- Return standard HTTP 429 (Too Many Requests) when limits are exceeded.

### Non-Functional
- **Low Latency**: The rate limiter should not add significant overhead to the request flow.
- **High Availability**: If the rate limiter fails, it should fail-open or have a highly available fallback.
- **Scalability**: Must handle millions of users and thousands of concurrent requests.

## 2. API Design
### Rate Limit Check
`POST /v1/rate-limit`
- **Request Body**: `{ "user_id": "user_123", "action": "create_post" }`
- **Response**: `200 OK` (Allowed) or `429 Too Many Requests` (Blocked)

## 3. Capacity Estimation
- **Users**: 100M
- **QPS**: 10k/s avg, 50k/s peak.
- **Storage**: If using Redis, each entry (User ID + Counter) is ~20 bytes. 100M users = ~2GB of RAM.

## 4. High-Level Architecture
1. **Client** sends request.
2. **Load Balancer** forwards to **API Gateway**.
3. **API Gateway** calls the **Rate Limiter Middleware**.
4. **Rate Limiter** checks the count in a **Distributed Cache (Redis)**.
5. If allowed, forward to **Backend Service**; otherwise, return `429`.

## 5. Detailed Component Design
### Token Bucket Algorithm
We use the **Token Bucket** algorithm for its simplicity and memory efficiency.
- A "bucket" has a maximum capacity.
- Tokens are added at a fixed rate.
- Each request consumes one token.
- If the bucket is empty, the request is dropped.

### Handling Concurrency (Race Conditions)
To avoid race conditions in a distributed environment:
1. **Lua Scripts**: Use Redis Lua scripts to ensure atomicity of the "Check-and-Decrement" operation.
2. **Sorted Sets**: For sliding window logs, Redis sorted sets can track timestamps.

## 6. Trade-offs & Future Scaling
- **Consistency vs. Latency**: Using a centralized Redis ensures strict consistency but adds network hop latency. Local caching with periodic sync can reduce latency at the cost of slight inaccuracy.
- **Fail-Open Policy**: In extreme cases, if the rate limiter is down, it's often better to allow the request (fail-open) to maintain user experience, while alerting engineers.

---
*This architectural deep-dive was generated with the System Design Architect AI skill.*
