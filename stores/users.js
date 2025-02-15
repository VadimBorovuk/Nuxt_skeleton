export const useCounterStore = defineStore('counter', () => {
  const count = ref(1)
  const name = ref('Eduardo')
  const doubleCount = computed(() => count.value * 2)
  const increment = () => {
    count.value++
  }

  return {count, name, doubleCount, increment}
})
