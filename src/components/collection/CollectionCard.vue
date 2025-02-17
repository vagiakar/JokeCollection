<script setup lang="ts">
import { type Joke, type SavedJoke } from '@/types/JokeTypes'
import { StarIcon } from '@heroicons/vue/24/solid'

const props = defineProps<{
  joke: SavedJoke
}>()

import { useCollectionStore } from '@/stores/useCollectionStore'
import Rating from '@/components/collection/Rating.vue'

const store = useCollectionStore()

const { removeJoke } = store
</script>

<template>
  <div class="bg-white rounded-lg p-4 mt-4">
    <div>
      <p class="text-gray-600 text-xl"><strong>Joke Type:</strong> {{ joke.type }}</p>
      <Rating :joke="joke" />
    </div>
    <h3 class="text-2xl font-bold mb-4">{{ joke.setup }}</h3>
    <p class="text-gray-600">{{ joke.punchline }}</p>

    <div v-if="joke" class="flex justify-end mt-4">
      <button
        class="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
        @click="removeJoke(joke)"
      >
        Remove from collection
      </button>
    </div>
  </div>
</template>
