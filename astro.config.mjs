import { defineConfig } from "astro/config"
import starlight from "@astrojs/starlight"
import fs from "node:fs"
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig(
  {
    i18n: {
      defaultLocale: "en",
      locales: ["en"],
    },

    site: "https://waveproc.github.io/c3-web",
    base: "/c3-web",

    redirects: {
      '/docs': '/c3-web/getting-started',
      '/guide': '/c3-web/getting-started',
      '/introduction': '/c3-web/getting-started',

      '/guide/basic-types-and-values': '/c3-web/language-fundamentals/basic-types-and-values',

      '/guide/my-first-hello-world': '/c3-web/getting-started/hello-world',
      '/guide/my-first-project': '/c3-web/getting-started/projects',
      '/references/development': '/c3-web/get-involved',

      '/references': '/c3-web/getting-started/design-goals',
      '/introduction/design-goals': '/c3-web/getting-started/design-goals',

      '/references/getting-started/prebuilt-binaries': '/c3-web/getting-started/prebuilt-binaries',
      '/install-c3/prebuilt-binaries': '/c3-web/getting-started/prebuilt-binaries',

      '/references/getting-started/setup': '/c3-web/getting-started/compile',
      '/install-c3/compile': '/c3-web/getting-started/compile',

      '/references/docs/examples': '/c3-web/language-overview/examples',
      '/references/getting-started/primer': '/c3-web/language-overview/primer',


      '/references/getting-started/allfeatures': '/c3-web/faq/allfeatures',
      '/introduction/roadmap': '/c3-web/getting-started/roadmap',
      '/compare': '/c3-web/faq/compare-languages',
      '/references/docs/compare': '/c3-web/faq/compare-languages'

    },

    integrations: [
      starlight(
        {
          favicon: "/ico.svg",
          title: "C3",
          customCss: ["./src/content/docs.css"],
          expressiveCode: {
            shiki: {
              langs: [JSON.parse(fs.readFileSync("./c3-grammar.json", "utf-8"))],
              themes: {
                light: 'github-light',
                dark: 'github-dark',
              },
            },
          },
        }),
    ],

    vite: {
      plugins: [tailwindcss()]
    }
  })
