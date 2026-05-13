import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  devtools: { enabled: true },

  app: {
    baseURL: "/",
    head: {
      title: "ЖК Новое Жегалово",
      meta: [
        { name: "description", content: "Продажа квартир в ЖК Новое Жегалово" },
      ],
    },
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
    mailUser: process.env.YANDEX_MAIL_USER,
    mailPassword: process.env.YANDEX_MAIL_PASSWORD,
    mailFrom: process.env.YANDEX_MAIL_FROM,
    mailTo: process.env.YANDEX_MAIL_TO,
    mailToBCC1: process.env.YANDEX_MAIL_TO_BCC1,

    public: {
      yandexMapsKey: process.env.YANDEX_MAPS_API_KEY,
      baseURL: process.env.BASE_URL,
      yandexMetrika: process.env.YANDEX_METRIKA,
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
