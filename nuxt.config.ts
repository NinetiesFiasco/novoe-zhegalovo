import { defineNuxtConfig } from "nuxt/config"

import { fileURLToPath } from "url"

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  devtools: { enabled: true },

  srcDir: "src/",
  modules: ["@pinia/nuxt", "@nuxt/fonts"],
  fonts: {
    provider: "google",
    families: [
      {
        name: "Golos-Text",
        provider: "local",
        fallbacks: ["Arial"],
      },
    ],
  },

  plugins: ["~/app/plugins/yandex-maps.client.ts"],

  css: [
    "~/app/css/reset.css",
    "~/app/css/global.css",
    "~/app/css/variables.css",
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/app/css/mixins.scss" as *;',
        },
      },
    },
  },

  alias: {},
  runtimeConfig: {
    public: {
      yandexMapsKey: process.env.YANDEX_MAPS_API_KEY,
    },
  },
})
