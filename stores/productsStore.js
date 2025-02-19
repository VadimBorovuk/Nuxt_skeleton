import {ref} from 'vue';
import axios from "axios";

export const productsStore = defineStore('productsStore', () => {
  const data = ref({});
  const loading = ref(false);
  const error = ref(null);

  const fetchData = async () => {
    loading.value = true;
    error.value = null;

    try {
      const config = useRuntimeConfig();
      const response = await axios(`https://dummyjson.com/products`);
      data.value = response.data;
    } catch (err) {
      error.value = 'Помилка завантаження даних';
    } finally {
      loading.value = false;
    }
  };

  const computedProducts = computed(() => data.value)

  return {data, loading, error, fetchData, computedProducts};
});
