# System Design Workflow

Follow these steps when designing a new system for the portfolio:

## Step 1: Requirements Clarification
- Identify functional requirements (e.g., "Users can create short URLs").
- Identify non-functional requirements (e.g., "High availability", "Low latency").
- Define the scale (e.g., "100M daily active users").

## Step 2: API Design
- Define the primary REST/gRPC endpoints.
- Specify request and response formats.
- Identify edge cases and error handling.

## Step 3: Capacity Estimation (Back-of-the-envelope)
- Estimate QPS (Queries Per Second).
- Calculate storage requirements (e.g., "500GB/day").
- Determine bandwidth constraints.

## Step 4: High-Level Design
- Map out the primary components (Load Balancer, Web Servers, Databases, Caches).
- Define the data flow between components.
- Choose appropriate database types (SQL vs. NoSQL).

## Step 5: Detailed Design
- Deep dive into specific components (e.g., Hashing algorithms, Consistency models).
- Address performance bottlenecks and single points of failure.
- Explain data partitioning and replication strategies.

## Step 6: Trade-offs & Future Improvements
- Discuss the "Why" behind architectural decisions.
- Identify limitations and how they might be addressed at higher scale.
- Mention alternative technologies.
