<template>
  <div>
    <pre>{{workPlace}}</pre>
  </div>
</template>

<script setup>
import {useCalendar} from "~/api/calendar.js";
const {getListWorkspaces} = useCalendar()
let workPlace = reactive({})
const fetchData = async () => {
  try {
    const answer = await getListWorkspaces({
      manager_uuid: localStorage.getItem('crm_uuid')
    });
    workPlace = answer.data.data
  } catch (error) {
    console.error('Помилка при отриманні інформації про акаунт:', error);
  }
};
onMounted(() => {

  fetchData()
})

</script>

<style lang="scss" scoped>

</style>
