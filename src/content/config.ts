import { defineCollection, z } from 'astro:content';

// One file per tape in src/content/mixtapes. The body of the file is the longer note
// shown when the tape is selected.
const mixtapes = defineCollection({
  type: 'content',
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
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
  }),
});

export const collections = { mixtapes, blog };
