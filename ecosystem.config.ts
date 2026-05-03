require("dotenv").config()

module.exports = {
  apps: [
    {
      name: "nuxt-app",
      script: ".output/server/index.mjs",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        YANDEX_MAPS_API_KEY: process.env.YANDEX_MAPS_API_KEY,
        NUXT_APP_BASE_URL: process.env.NUXT_APP_BASE_URL,
        YANDEX_MAIL_USER: process.env.YANDEX_MAIL_USER,
        YANDEX_MAIL_PASSWORD: process.env.YANDEX_MAIL_PASSWORD,
        YANDEX_MAIL_FROM: process.env.YANDEX_MAIL_FROM,
        YANDEX_MAIL_TO: process.env.YANDEX_MAIL_TO,
        YANDEX_MAIL_TO_BCC1: process.env.YANDEX_MAIL_TO_BCC1,
      },
    },
  ],
}
