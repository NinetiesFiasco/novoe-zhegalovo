import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  devtools: { enabled: true },

  app: {
    baseURL: "/",
  },

  srcDir: "src/",
  modules: ["@pinia/nuxt", "@nuxt/fonts"],
  fonts: {
    provider: "google",
    families: [
      {
        name: "Golos-Text",
        provider: "local",
        fallbacks: ["Arial"],
        weights: [400, 500, 700, 900],
      },
    ],
  },

  plugins: ["~/app/plugins/yandex-maps.client.ts", "~/app/plugins/maska.ts"],

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
      baseURL: "/",
    },
  },

  typescript: {
    tsConfig: {
      include: ["types/*.d.ts"],
    },
  },

  imports: {
    dirs: ["shared/composables"],
  },
})
