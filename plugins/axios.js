import axios from 'axios';

export default defineNuxtPlugin((nuxtApp) => {
  const instance = axios.create({
    baseURL: useRuntimeConfig().public.apiBase || 'http://localhost:3000',
    timeout: 10000, // Таймаут запиту
  });

  return {
    provide: {
      axios: instance,
    },
  };
});
