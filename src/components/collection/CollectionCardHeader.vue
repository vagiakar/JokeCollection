<script setup lang="ts">
import Rating from '@/components/collection/Rating.vue'
import { type SavedJoke } from '@/types/JokeTypes'
import JokeTypeHeading from '@/components/JokeTypeHeading.vue'

const props = defineProps<{
  joke: SavedJoke
}>()
</script>

<template>
  <Rating :joke="joke" />
  <JokeTypeHeading :joke="joke" />
</template>
