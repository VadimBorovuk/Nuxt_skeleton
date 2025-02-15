<template>
  <header>
    <ul class="flex items-center gap-2 h-[70px] bg-neutral-700 text-white">
      <li><NuxtLink to="/" active-class="text-blue-500 font-bold">
        Home
      </NuxtLink></li>
      <li><NuxtLink active-class="text-blue-500 font-bold" to="/counter">counter</NuxtLink></li>
      <li><NuxtLink active-class="text-blue-500 font-bold" to="/products">products</NuxtLink></li>

    </ul>
    <button @click="router.push('/')">home</button>
  </header>
</template>

<script setup>
const router = useRouter()

</script>

<style scoped>

</style>
