import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import NetlifyCMS from "astro-netlify-cms";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    NetlifyCMS({
      disableIdentityWidgetInjection: true,
      config: {
        backend: {
          name: "git-gateway",
          branch: "main",
        },
        slug: {
          encoding: "ascii",
          clean_accents: true,
          sanitize_replacement: "-",
        },
        collections: [
          {
            name: "posts",
            label: "Blog Posts",
            folder: "src/content/blog",
            nested: { depth: 5, summary: "{{slug}}" },
            create: true,
            delete: true,
            meta: {
              path: { widget: "string", label: "Path", index_file: "index" },
            },
            fields: [
              {
                name: "publishDate",
                widget: "date",
                format: "YYYY-MM-DD",
                label: "Date",
              },
              { name: "title", widget: "string", label: "Post Title" },
              {
                name: "description",
                widget: "string",
                label: "Post description",
              },
              {
                name: "published",
                widget: "boolean",
                label: "Publish status",
                required: false,
              },
              { name: "body", widget: "markdown", label: "Post Body" },
            ],
          },
        ],
      },
    }),
  ],
  site: "https://alfon.so",
  compressHTML: true,
});
