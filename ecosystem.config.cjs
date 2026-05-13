module.exports = {
  apps: [
    {
      name: "novoe-zhegalovo",
      script: ".output/server/index.mjs",

      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
}
