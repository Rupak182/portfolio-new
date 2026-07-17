// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  blog: create.doc("blog", {"low-level-design.mdx": () => import("../content/blog/low-level-design.mdx?collection=blog"), "system-design/caching.mdx": () => import("../content/blog/system-design/caching.mdx?collection=blog"), "system-design/index.mdx": () => import("../content/blog/system-design/index.mdx?collection=blog"), "system-design/load-balancing.mdx": () => import("../content/blog/system-design/load-balancing.mdx?collection=blog"), }),
};
export default browserCollections;