<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useFetchJoke } from '@/composables/useFetchJoke'
import type { JokeType } from '@/types'
import { useCollectionStore } from '@/useCollectionStore'
import DiscoveryCard from '@/components/discovery/DiscoveryCard.vue'
import Select from '@/components/Select.vue'

const selectedType = ref<JokeType>('random')
const store = useCollectionStore()
const { loadJokesFromStorage } = store

const { loading, joke, errorMessage, fetchJoke } = useFetchJoke(selectedType)

onMounted(() => {
  loadJokesFromStorage()
})
</script>

<template>
  <h2 class="text-2xl text-gray-200 font-bold text-center p-4">Discover new jokes!</h2>
  <Select
    id="category-select"
    label="Pick a category:"
    :options="[
      { value: 'random', text: 'Random Joke' },
      { value: 'programming', text: 'Programming Joke' },
    ]"
    v-model="selectedType"
    @change="fetchJoke"
  ></Select>
  <DiscoveryCard
    :errorMessage="errorMessage"
    :loading="loading"
    :joke="joke"
    :fetchJoke="fetchJoke"
  />
</template>
