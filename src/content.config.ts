import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One file per tape in src/content/mixtapes. The body of the file is the longer note
// shown when the tape is selected.
const mixtapes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/mixtapes' }),
  schema: z.object({
    number: z.number().int(),
    title: z.string(),
    blurb: z.string(),
    color: z.enum(['orange', 'yellow', 'green', 'blue', 'sky']),
    spotify: z.string().url(),
    appleMusic: z.string().url().optional(),
    tracks: z.array(z.object({ title: z.string(), artist: z.string() })),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
  }),
});

export const collections = { mixtapes, blog };
