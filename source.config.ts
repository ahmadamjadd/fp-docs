import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from 'fumadocs-mdx/config';
import { remarkCodeHike, recmaCodeHike, CodeHikeConfig } from "codehike/mdx"

// You can customise Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.vercel.app/docs/mdx/collections#define-docs
export const docs = defineDocs({
  docs: {
    schema: frontmatterSchema,
  },
  meta: {
    schema: metaSchema,
  },
});

const chConfig: CodeHikeConfig = {
  components: {
  },
}


export default defineConfig({
  mdxOptions: {
    remarkPlugins: (v) => [[remarkCodeHike, chConfig], ...v],
    recmaPlugins: [[recmaCodeHike, chConfig]], 
  },
})
