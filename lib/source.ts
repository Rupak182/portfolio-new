import { blog as blogCollection, meta } from 'collections/server';
import { loader } from 'fumadocs-core/source';
import { toFumadocsSource } from 'fumadocs-mdx/runtime/server';

export const blog = loader({
  baseUrl: '/blog',
  source: toFumadocsSource(blogCollection, meta),
});