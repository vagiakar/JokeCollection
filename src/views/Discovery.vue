<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useFetchJoke } from '@/composables/useFetchJoke'
import type { JokeType } from '@/types/JokeTypes'
import { useCollectionStore } from '@/stores/useCollectionStore'

const selectedType = ref<JokeType>('random')
const { saveJoke, loadJokesFromStorage, jokeCollection } = useCollectionStore()

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
  <button @click="saveJoke(joke)" v-if="joke !== null">Save to collection</button>
</template>
