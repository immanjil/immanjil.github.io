import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const leetcode = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/leetcode" }),
    schema: z.object({
        title: z.string().optional(),
        date: z.coerce.date().optional(),
        pubDate: z.coerce.date().optional(),
        tags: z.array(z.string()).optional(),
        description: z.string().optional(),
        solution: z.string().optional(),
        priority: z.number().optional().default(0),
    }),
});

const systemDesign = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/system-design" }),
    schema: z.object({
        title: z.string().optional(),
        date: z.coerce.date().optional(),
        pubDate: z.coerce.date().optional(),
        tags: z.array(z.string()).optional(),
        description: z.string().optional(),
        solution: z.string().optional(),
    }),
});

export const collections = { leetcode, 'system-design': systemDesign };
