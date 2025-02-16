<script setup lang="ts">
import { type JokeType } from '@/types/JokeTypes'
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useFetchJoke } from '@/composables/useFetchJoke'
import { useCollectionStore } from '@/stores/useCollectionStore'

const props = defineProps<{
  selectedType: JokeType
}>()

const store = useCollectionStore()
const { jokeCollection } = storeToRefs(store)
const { saveJoke } = store

const { joke, fetchJoke } = useFetchJoke(ref(props.selectedType))
</script>

<template>
  <div class="bg-white rounded-lg p-4 mt-4">
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
