<template>
  <div>
    <pre>{{data}}</pre>
  </div>
</template>

<script setup>
const { data } = await useAsyncData('workplace', () => $fetch('/api/workplace'))

onMounted(()=>{
  const config = useRuntimeConfig();

})
</script>

<style lang="scss" scoped>

</style>
