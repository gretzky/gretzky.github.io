import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://spencer.town",
  integrations: [sitemap(), react(), robotsTxt(), mdx()],
  markdown: {
    shikiConfig: {
      theme: "ayu-dark",
    },
  },
});
