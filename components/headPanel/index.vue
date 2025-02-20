<template>
  <header>
    <ul class="flex items-center gap-2 h-[70px] bg-neutral-700 text-white px-6">
      <li><NuxtLink to="/" active-class="text-blue-500 font-bold">
        Home
      </NuxtLink></li>
      <li><NuxtLink active-class="text-blue-500 font-bold" to="/manager">manager</NuxtLink></li>
      <li><NuxtLink active-class="text-blue-500 font-bold" to="/workplace">workplace</NuxtLink></li>
      <li><NuxtLink active-class="text-blue-500 font-bold" to="/calendar">calendar</NuxtLink></li>
    </ul>
  </header>
</template>


<style scoped>

</style>
