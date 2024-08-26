import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.array(z.string()),
    pubDate: z.date(),
    lastUpdated: z.date(),
  }),
});

export const collections = { blog };
