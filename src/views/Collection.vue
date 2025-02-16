<script setup lang="ts">
import { useCollectionStore } from '@/stores/useCollectionStore'
import { storeToRefs } from 'pinia'

const store = useCollectionStore()
const { jokeCollection } = storeToRefs(store)
const { removeJoke } = store
</script>

<template>
  <div v-if="jokeCollection.length > 0">
    <h2 class="text-2xl text-gray-200 font-bold text-center p-4">Your saved jokes</h2>
    <ul>
      <li v-for="joke in jokeCollection" :key="joke.id">
        <div class="bg-white rounded-lg p-4 mt-4">
          <p class="text-gray-600 text-xl"><strong>Joke Type:</strong> {{ joke?.type }}</p>
          <h3 class="text-2xl font-bold mb-4">{{ joke?.setup }}</h3>
          <p class="text-gray-600">{{ joke?.punchline }}</p>

          <div v-if="joke" class="flex justify-end mt-4">
            <button
              class="bg-orange-700 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              @click="removeJoke(joke)"
            >
              Remove from collection
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div v-else>
    <h2 class="text-2xl text-gray-200 font-bold text-center p-4">No jokes in collection!</h2>
  </div>
</template>
