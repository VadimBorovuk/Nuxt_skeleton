<template>
  <div>
    <button></button>
    <div class="bg-atlantis-500 text-white p-4">
      Це фон кольору atlantis 500
    </div>
    <button class="bg-atlantis hover:bg-atlantis-200 text-white px-4 py-2 rounded">
      Кнопка
    </button>
    <pre>{{calendarStore.workPlace}}</pre>
  </div>
</template>

<script setup>
import {useCalendarStore} from "~/stores/calendarStore.js";
// import {useLoaderStore} from "~/stores/loaderStore.js";

const calendarStore = useCalendarStore()
// const loaderStore = useLoaderStore()

const fetchData = async () => {
  // loaderStore.startLoadingPage()
  try {
    await calendarStore.fetchCalendarData({
      manager_uuid: localStorage.getItem('crm_uuid')
    });
  } catch (error) {
    console.error('Помилка при отриманні інформації про акаунт:', error);
  }finally {
    // loaderStore.closeLoadingPage()
  }
};
onMounted(() => {
  fetchData()
})

</script>

<style lang="scss" scoped>

</style>
