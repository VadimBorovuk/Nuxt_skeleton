export default defineNuxtConfig({
  compatibilityDate: '2025-02-14',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt'
  ],
  runtimeConfig: {
    //for server-only variable
    APP_URL: process.env.SERVER_APP_URL,
    // Public for exposed to client-side
    public: {
      CLIENT_APP_URL: process.env.CLIENT_APP_URL,
      CLIENT_APP_PATH: process.env.CLIENT_APP_PATH,
      CALENDAR_APP_URL: process.env.CLIENT_APP_CALENDAR_URL,
      CLIENT_APP_ID: process.env.CLIENT_APP_ID,
    },
  },
  typescript: {
    strict: false,
    shim: false
  },
})
