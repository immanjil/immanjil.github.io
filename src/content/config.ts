import { defineCollection, z } from 'astro:content';
const blog = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string().optional(),
        date: z.date().optional(),
    }),
});
export const collections = { blog };