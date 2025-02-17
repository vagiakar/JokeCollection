<script setup lang="ts">
import { StarIcon } from '@heroicons/vue/24/solid'
import { useCollectionStore } from '@/useCollectionStore'
import type { SavedJoke } from '@/types'

const props = defineProps<{
  joke: SavedJoke
}>()

const { addStars } = useCollectionStore()
</script>

<template>
  <div class="flex space-x-1">
    <button
      v-for="star in 5"
      :key="star"
      @click="addStars(joke.id, star)"
      class="focus:outline-none"
    >
      <StarIcon
        :class="star <= (joke?.stars || 0) ? 'text-yellow-400' : 'text-gray-300'"
        class="w-8 h-8"
      />
    </button>
  </div>
</template>
