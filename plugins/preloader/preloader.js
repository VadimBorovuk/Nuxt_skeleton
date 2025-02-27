import {useLoaderStore} from "~/stores/loaderStore.js";

export default defineNuxtPlugin((nuxtApp) => {
  const loaderStore = useLoaderStore();
  const router = useRouter();

  router.beforeEach((to, from, next) => {
    loaderStore.startLoadingPage();
    next();
  });

  router.afterEach(() => {
    setTimeout(() => {
      loaderStore.closeLoadingPage();
    }, 500); // Затримка для плавного закриття
  });
});
