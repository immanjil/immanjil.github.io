# Astro Content Requirements (System Design)

All markdown files for the `system-design` content collection must adhere to these rules:

## 1. File Naming
- Use lowercase hyphenated slugs (e.g., `rate-limiter.md`).
- Place files in `src/content/system-design/`.

## 2. Required Frontmatter (YAML)
- `title` (string): Descriptive title.
- `description` (string): Summary for SEO and cards.
- `pubDate` (Date): Format `YYYY-MM-DD`.
- `tags` (string[]): At least one tag (`system-design`).
- `image` (string): Path starting with `/assets/`.
- `category` (string): Must be `System Design`.

## 3. Formatting
- Use GitHub Flavored Markdown (GFM).
- Use code blocks for API definitions (e.g., `POST /v1/shorten`).
- Use mermaid syntax or clear descriptions for diagrams.
- Sanitize slugs: Remove `.md` extensions in Astro routing (handled by the Astro migration).
