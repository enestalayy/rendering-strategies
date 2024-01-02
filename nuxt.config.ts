// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-primevue"],
  experimental: {
    payloadExtraction: true,
  },
  routeRules: {
    "/isr": { isr: 60 },
  },
});
