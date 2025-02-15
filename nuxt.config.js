export default defineNuxtConfig({
  compatibilityDate: '2025-02-14',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt'
  ],
  runtimeConfig: {
    public: {
      apiBase: 'https://dummyjson.com', // Змініть на свою адресу API
    },
  },
  typescript: {
    strict: false,
    shim: false
  }
})