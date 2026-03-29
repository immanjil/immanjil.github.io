import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const leetcode = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/leetcode" }),
    schema: z.object({
        title: z.string().optional(),
        date: z.date().optional(),
        tags: z.array(z.string()).optional(),
        description: z.string().optional(),
    }),
});

export const collections = { leetcode };
