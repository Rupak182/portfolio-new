import { defineCollections, defineConfig, frontmatterSchema } from 'fumadocs-mdx/config';
import { z } from 'zod';

export const blog = defineCollections({
  type: 'doc',
  dir: 'content/blog',
  schema: frontmatterSchema.extend({
    date: z.string().date().or(z.date()), // Validate standard YYYY-MM-DD string or Date object
    description: z.string().max(200),
    tags: z.array(z.string()).optional(),
  }),
});

export default defineConfig();