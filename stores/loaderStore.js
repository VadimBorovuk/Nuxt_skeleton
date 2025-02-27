import { defineStore } from 'pinia';


export const useLoaderStore = defineStore('loader', ()=>{
  const loader = ref(false)

  const startLoadingPage = () => {
    loader.value = true
  }

  const closeLoadingPage = () => {
    loader.value = false
  }

  return {
    loader,
    startLoadingPage,
    closeLoadingPage
  }
});
