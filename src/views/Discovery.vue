<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useFetchJoke } from '@/composables/useFetchJoke'
import type { JokeType } from '@/types/JokeTypes'
import { useCollectionStore } from '@/stores/useCollectionStore'
import { storeToRefs } from 'pinia'

const selectedType = ref<JokeType>('random')
const store = useCollectionStore()
const { saveJoke, loadJokesFromStorage, removeJoke } = store
const { jokeCollection } = storeToRefs(store)

const { joke, loading, errorMessage, fetchJoke } = useFetchJoke(selectedType)

onMounted(() => {
  loadJokesFromStorage()
})
</script>

<template>
  <h2 class="text-2xl text-gray-200 font-bold text-center p-4">Discover new jokes!</h2>
  <div class="flex mb-4 items-center">
    <label for="category-select" class="text-gray-200 mr-2">Pick a category:</label>
    <select
      class="bg-gray-200 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
      v-model="selectedType"
      @change="fetchJoke"
    >
      <option value="random">Random Joke</option>
      <option value="programming">Programming Joke</option>
    </select>
  </div>
  <div v-if="loading">Loading...</div>
  <div v-else-if="errorMessage">{{ errorMessage }}</div>
  <div class="bg-white rounded-lg p-4 mt-4" v-else>
    <p class="text-gray-600 text-xl"><strong>Joke Type:</strong> {{ joke?.type }}</p>
    <h3 class="text-2xl font-bold mb-4">{{ joke?.setup }}</h3>
    <p class="text-gray-600">{{ joke?.punchline }}</p>
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
          class="bg-orange-400 hover:bg-orange-500 text-gray-800 font-bold py-2 px-4 rounded"
        >
          Save to collection
        </button>
        <p v-else class="text-orange-600 font-bold py-2 px-4 rounded">In collection</p>
      </div>
    </div>
  </div>
</template>
