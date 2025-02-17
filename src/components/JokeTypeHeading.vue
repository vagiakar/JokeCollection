<script setup lang="ts">
import { type Joke } from '@/types/JokeTypes'

const props = defineProps<{
  joke: Joke | null
}>()
</script>

<template>
  <h3 class="text-gray-600 text-xl" v-if="joke"><strong>Joke Type:</strong> {{ joke.type }}</h3>
</template>
