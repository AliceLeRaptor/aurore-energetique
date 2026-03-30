// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://AliceLeRaptor.github.io",
  base: "/aurore-energetique",
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
