<template>
  <div class="preloader" :class="{ hidden: !loaderStore.loader }">
    <div class="spinner"></div>
  </div>
</template>

<script setup>
import {useLoaderStore} from "~/stores/loaderStore.js";

const loaderStore = useLoaderStore()

</script>

