// @ts-nocheck
import * as __fd_glob_3 from "../content/blog/system-design/load-balancing.mdx?collection=blog"
import * as __fd_glob_2 from "../content/blog/system-design/index.mdx?collection=blog"
import * as __fd_glob_1 from "../content/blog/system-design/caching.mdx?collection=blog"
import * as __fd_glob_0 from "../content/blog/low-level-design.mdx?collection=blog"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();

export const blog = await create.doc("blog", "content/blog", {"low-level-design.mdx": __fd_glob_0, "system-design/caching.mdx": __fd_glob_1, "system-design/index.mdx": __fd_glob_2, "system-design/load-balancing.mdx": __fd_glob_3, });