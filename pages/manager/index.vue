<template>
  <client-only>
    <h2>userData</h2>
      <span>
        {{ userData.role }}
        {{userData.user_info.id}}
        {{userData.user_info.name}}
      </span>
  </client-only>
</template>

<script setup>
import { useUserStore } from "~/stores/userStore.js";
const userStore = useUserStore()

const userData = computed(() => userStore.userData)
</script>

<style lang="scss" scoped>

</style>
