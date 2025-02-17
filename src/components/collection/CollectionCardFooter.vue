<script setup lang="ts">
import { type SavedJoke } from '@/types/JokeTypes'
import { useCollectionStore } from '@/stores/useCollectionStore'

const props = defineProps<{
  joke: SavedJoke
}>()

const store = useCollectionStore()
const { removeJoke } = store
</script>

<template>
  <div v-if="joke" class="flex justify-end mt-4">
    <button
      class="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
      @click="removeJoke(joke)"
    >
      Remove from collection
    </button>
  </div>
</template>
