<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { type Joke } from '@/types/JokeTypes'
import { useCollectionStore } from '@/stores/useCollectionStore'

const props = defineProps<{
  joke: Joke | null
  fetchJoke: () => void
  loading: boolean
  errorMessage: string | null
}>()

const store = useCollectionStore()
const { jokeCollection } = storeToRefs(store)
const { saveJoke } = store
</script>

<template>
  <div class="bg-white rounded-lg p-4 mt-4">
    <div v-if="loading"><p>...Loading</p></div>
    <div v-else-if="errorMessage">
      <p class="text-red-700 pb-2">{{ errorMessage }}</p>
      <button
        class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        @click="fetchJoke"
      >
        Generate new joke
      </button>
    </div>

    <p class="text-gray-600 text-xl" v-if="joke"><strong>Joke Type:</strong> {{ joke.type }}</p>
    <transition name="fade-setup">
      <h3 v-if="joke" class="text-2xl font-bold mb-4">{{ joke.setup }}</h3>
    </transition>
    <transition name="fade-punchline">
      <p v-if="joke" class="text-gray-600">{{ joke.punchline }}</p>
    </transition>
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
  </div>
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
