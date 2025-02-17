<script setup lang="ts">
import { type Joke } from '@/types/JokeTypes'
import { useCollectionStore } from '@/stores/useCollectionStore'
import { storeToRefs } from 'pinia'

const props = defineProps<{
  joke: Joke | null
  fetchJoke: () => void
}>()

const store = useCollectionStore()
const { jokeCollection } = storeToRefs(store)
const { saveJoke } = store
</script>

<template>
  <div v-if="joke" class="flex justify-between mt-4">
    <button
      class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      @click="fetchJoke"
    >
      Generate new joke
    </button>
    <div v-if="joke">
      <button
        v-if="!jokeCollection.some((j) => j.id === joke?.id)"
        @click="saveJoke(joke)"
        class="bg-green-400 hover:bg-green-500 text-gray-800 font-bold py-2 px-4 rounded ml-4"
      >
        Save to collection
      </button>
      <p v-else class="text-green-600 font-bold py-2 px-4 rounded">In collection</p>
    </div>
  </div>
</template>
