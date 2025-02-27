<template>
  <header class="flex items-center justify-between h-[70px] bg-neutral-700 text-white px-6">
    <Icon name="ic:baseline-add-to-drive" style="color: white" />
    <client-only>
      <ViewLinks/>
      <div class="flex items-center">
<!--        <ColorScheme><USelect v-model="$colorMode.preference" :options="['system', 'light', 'dark']" /></ColorScheme>-->
        <ViewLangs/>
      </div>

    </client-only>
  </header>
</template>

<script setup>
import ViewLangs from "~/components/headPanel/ViewLangs/ViewLangs.vue";
import ViewLinks from "~/components/headPanel/ViewLinks/ViewLinks.vue";
</script>


<style scoped>
/* Стилі */
</style>
