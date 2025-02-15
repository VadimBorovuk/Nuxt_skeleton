<template>
  <div>
    <h1>Counter by {{store.name}}</h1>
    <p>doubleValue {{store.doubleCount}}</p>
    <button @click="incrementCount">+</button>
  </div>
</template>

<script setup>
useHead({
  title: "Counter"
})

import {useCounterStore} from "~/stores/users.js";

const store = useCounterStore()
const doubleValue = computed(() => store.doubleCount)
const incrementCount = () => store.increment()
</script>

<style lang="scss" scoped>

</style>
