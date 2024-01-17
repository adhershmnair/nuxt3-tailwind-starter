// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/scss/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@nuxtjs/color-mode",
    "nuxt-icon",
    "nuxt-gtag"
  ],
  gtag: {
    id: 'G-WD6QFFKKVF'
  },
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.ico" }
      ]
    }
  }
});