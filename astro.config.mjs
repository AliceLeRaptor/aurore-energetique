// @ts-check
import { defineConfig, fontProviders } from "astro/config";

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
  fonts: [
    {
      provider: fontProviders.local(),
      name: "EBGaramond",
      cssVariable: "--font-garamond",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/EBGaramond_compressed.woff2"],
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "Lato",
      cssVariable: "--font-lato-regular",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/Lato-Regular.woff2"],
          },
        ],
      },
    },
  ],
});
