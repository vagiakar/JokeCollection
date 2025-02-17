<script setup lang="ts">
import { useGetStatistics } from '@/composables/useGetStatistics'

const { getAverageStars, getJokeCount } = useGetStatistics()
const stars = getAverageStars()
</script>

<template>
  <h2 class="text-2xl text-gray-200 font-bold text-center p-4">Check your jokes statistics!</h2>
  <div class="bg-white rounded-lg p-4 mt-4">
    <p class="text-gray-600 text-xl"><strong>Number of jokes:</strong> {{ getJokeCount() }}</p>
    <p class="text-gray-600 text-xl">
      <strong>Average stars:</strong>
      {{ stars === undefined ? 'You have not yet rated any jokes' : stars }}
    </p>
  </div>
</template>
