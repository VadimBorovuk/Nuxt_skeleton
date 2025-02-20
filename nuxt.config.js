export default defineNuxtConfig({
  compatibilityDate: '2025-02-14',
  devtools: {enabled: true},
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss'
  ],
  routeRules: {
    'manager': {ssr: true}
  },
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
  // ssr: false,
  plugins: [
    '~/plugins/services/service',
    '~/plugins/services/serviceCalendar',
    '~/plugins/lang/i118n',
  ],
  typescript: {
    strict: false,
    shim: false
  },
  i18n: {
    locales: ['en', 'uk'],
    defaultLocale: 'en',
    strategy: 'no_prefix',
    vueI18n: './i18n.config.js',
  }
})
