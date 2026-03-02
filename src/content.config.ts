import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const cares = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/cares" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
      price: z.number(),
    }),
});

export const collections = { cares };
