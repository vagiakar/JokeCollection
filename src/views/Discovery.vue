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
  <h1>Discovery</h1>
  <select v-model="selectedType" @change="fetchJoke">
    <option value="random">Random Joke</option>
    <option value="programming">Programming Joke</option>
  </select>
  <div v-if="loading">Loading...</div>
  <div v-else-if="errorMessage">{{ errorMessage }}</div>
  <div v-else>
    <p><strong>Joke Type:</strong> {{ joke?.type }}</p>
    <h2>{{ joke?.setup }}</h2>
    <p>{{ joke?.punchline }}</p>
  </div>
  <button @click="fetchJoke">Get a New Joke</button>
  <div v-if="joke">
    <button v-if="!jokeCollection.some((j) => j.id === joke?.id)" @click="saveJoke(joke)">
      Save to collection
    </button>
    <button v-else @click="removeJoke(joke)">Remove from collection</button>
  </div>
</template>
