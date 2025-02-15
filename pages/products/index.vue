<template>
  <Suspense>
    <template #default>
      <products-data :data="data"/>
    </template>
    <template #fallback>
      <p>Loading...</p>
    </template>
  </Suspense>

</template>

<script setup>
import {productsStore} from "~/stores/productsStore.js";

useHead({
  title: "Products"
})
onMounted(()=>{
  store.fetchData()
})

const store = productsStore()

const data = computed(()=>{
  return store.data
})


</script>

<style lang="scss" scoped>

</style>
