<script setup lang="ts">
import { type Joke } from '@/types'
import CardHeader from '@/components/JokeTypeHeading.vue'
import ErrorCardContent from './ErrorCardContent.vue'
import DiscoveryCardContent from './DiscoveryCardContent.vue'
import DiscoveryCardFooter from './DiscoveryCardFooter.vue'

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
    <DiscoveryCardFooter :joke="joke" :fetchJoke="fetchJoke" />
  </div>
</template>
