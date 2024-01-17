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
    "nuxt-gtag",
  ],
  gtag: {
    id: "G-WD6QFFKKVF",
  },
  app: {
    head: {
      title: "Nuxt3 Tailwind Starter | Adharsh M",
      meta: [
        {
          name: "description",
          content:
            "Nuxt3 Tailwind starter is a starter template project for Nuxt.js 3 + Tailwind CSS + Daisy UI.",
        },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/favicon.ico" }],
      htmlAttrs: {
        lang: "en",
        style: "font-size: 16px",
      },
    },
  },
});
