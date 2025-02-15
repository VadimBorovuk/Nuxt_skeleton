<template>
  <div>
w
    <ul>
      <template v-for="(product, key) in data" :key="key">
        <li v-if="product.id <= 5">
          <pre>{{ product.title }}</pre>
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  data: {
    type: Object,
    default: {}
  }
})

</script>

<style lang="scss" scoped>

</style>
