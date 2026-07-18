import { defineDocs, frontmatterSchema } from 'fumadocs-mdx/config';
import { z } from 'zod';

export const { docs: blog, meta } = defineDocs({
  dir: 'content/blog',
  docs: {
    schema: frontmatterSchema.extend({
      date: z.string().date().or(z.date()), // Validate standard YYYY-MM-DD string or Date object
      description: z.string().max(200),
      tags: z.array(z.string()).optional(),
    }),
  }
});