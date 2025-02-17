<script setup lang="ts">
import { type Joke } from '@/types'

const props = defineProps<{
  joke: Joke
}>()
</script>

<template>
  <h3 class="text-2xl font-bold mb-4">{{ joke.setup }}</h3>
  <p class="text-gray-600">{{ joke.punchline }}</p>
</template>
