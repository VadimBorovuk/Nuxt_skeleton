<template>
  <Preloader/>
  <HeadPanel/>
  <main class="h-[100vh]">
    <div class="page-holder p-6">
      <Sidebar/>
      <NuxtPage/>
    </div>
  </main>
</template>
<script setup>
import HeadPanel from "~/components/headPanel/headPanel.vue";
import Preloader from "~/components/preloader/preloader.vue";
</script>

<style scoped lang="scss">

</style>
