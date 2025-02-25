import {useNuxtApp} from '#app';

export function useApiTranslate() {
  const config = useRuntimeConfig();

  const transGetByLang = (lang) => {
    return useNuxtApp().$service({
      url: `/api/translate-by-lang/${lang}/${config.public.CLIENT_APP_ID}`,
      method: 'get'
    });
  };

  const langGet = () => {
    return useNuxtApp().$service({
      url: '/api/lang',
      method: 'get'
    })
  }

  return {
    transGetByLang,
    langGet
  }
}
