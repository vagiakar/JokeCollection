<script setup lang="ts">
const props = defineProps<{
  errorMessage: string
  fetchJoke: () => void
}>()
</script>

<template>
  <p class="text-red-700 pb-2">{{ errorMessage }}</p>
  <button
    class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
    @click="fetchJoke"
  >
    Generate new joke
  </button>
</template>
