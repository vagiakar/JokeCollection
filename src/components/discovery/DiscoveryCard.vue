<script setup lang="ts">
import { type Joke } from '@/types'
import CardHeader from '@/components/JokeTypeHeading.vue'
import DiscoveryCardContent from './DiscoveryCardContent.vue'

const props = defineProps<{
  joke: Joke | null
  fetchJoke: () => void
  loading: boolean
  errorMessage: string | null
}>()
</script>

<template>
  <div class="bg-white rounded-lg p-4 mt-4">
    <div v-if="loading"><p>...Loading</p></div>
    <div v-else-if="errorMessage">
      <ErrorCardContent :errorMessage="errorMessage" :fetchJoke="fetchJoke" />
    </div>
    <CardHeader :joke="joke" />
    <DiscoveryCardContent :joke="joke" />
  </div>
</template>
