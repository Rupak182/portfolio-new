// source.config.ts
import { defineCollections, defineConfig, frontmatterSchema } from "fumadocs-mdx/config";
import { z } from "zod";
var blog = defineCollections({
  type: "doc",
  dir: "content/blog",
  schema: frontmatterSchema.extend({
    date: z.string().date().or(z.date()),
    // Validate standard YYYY-MM-DD string or Date object
    description: z.string().max(200),
    tags: z.array(z.string()).optional()
  })
});
var source_config_default = defineConfig();
export {
  blog,
  source_config_default as default
};
