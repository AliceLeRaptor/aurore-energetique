// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
// TODO: changer l'url du site
export default defineConfig({
  site: "https://aurore-energetique.fr",
  integrations: [
    preact(),
    sitemap({
      filter: (page) => page !== "https://aurore-energetique.fr/admin/",
    }),
  ],
});
