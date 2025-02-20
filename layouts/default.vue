<template>
  <HeadPanel/>
  <main class="h-[100vh]">
    <div class="page-holder p-6">
      <Sidebar/>
      <NuxtPage/>
    </div>
  </main>
</template>
<script setup>

</script>

<style scoped lang="scss">
.page-holder{
display: flex;
}
</style>
