<template>
  <h2>userData</h2>


  <div v-if="userStore.loading">
    <span>Loading...</span>
  </div>
  <div v-else>
    <span>
      {{ userData.role }}
      {{userData.user_info.id}}
      {{userData.user_info.name}}
    </span>
  </div>
</template>

<script setup>
import {useUserStore} from "~/stores/userStore.js";

const userStore = useUserStore()

const userData = computed(() => userStore.userData)
</script>

<style lang="scss" scoped>

</style>
