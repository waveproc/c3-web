import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import starlight from "@astrojs/starlight"
import fs from "node:fs"

// https://astro.build/config
export default defineConfig({
  site: "https://waveproc.github.io",
  base: "/c3-web",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    starlight({
      favicon: "ico.svg",
      title: "The C3 Handbook",
      customCss: ["./src/content/docs.css"],
      expressiveCode: {
        shiki: {
          langs: [JSON.parse(fs.readFileSync("./c3-grammar.json", "utf-8"))],
        },
      },
    }),
  ],
})
