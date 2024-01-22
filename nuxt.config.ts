// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-primevue"],
  experimental: {
    payloadExtraction: true,
  },
  generate: {
    routes: ["/ssg"],
  },
  routeRules: {
    "/isr": { isr:  30, prerender: true, cors: true },
    "/ssg": { prerender: true },
    "/csr": { ssr: false },
  },
  primevue: {
    cssLayerOrder: "tailwind-base, primevue, tailwind-utilities",
    options: {
      ripple: true,
    },
    components: {
      prefix: "Prime",
      include: "*",
    },
  },
});
