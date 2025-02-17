<script setup lang="ts">
import { type Joke } from '@/types/JokeTypes'

const props = defineProps<{
  joke: Joke | null
}>()
</script>

<template>
  <transition name="fade-setup">
    <h4 v-if="joke" class="text-2xl font-bold mb-4">{{ joke.setup }}</h4>
  </transition>
  <transition name="fade-punchline">
    <p v-if="joke" class="text-gray-600">{{ joke.punchline }}</p>
  </transition>
</template>

<style scoped>
.fade-setup-enter-active {
  transition: all 1s ease-in;
}
.fade-setup-enter-from {
  opacity: 0;
}
.fade-setup-enter-to {
  opacity: 1;
}
.fade-punchline-enter-active {
  transition: all 2.5s ease-in;
}
.fade-punchline-enter-from {
  opacity: 0;
}
.fade-punchline-enter-to {
  opacity: 1;
}
</style>
