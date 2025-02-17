<script setup lang="ts">
import { type SavedJoke } from '@/types/JokeTypes'

import CardHeader from '@/components/JokeTypeHeading.vue'
import CollectionCardContent from './CollectionCardContent.vue'
import CollectionCardFooter from './CollectionCardFooter.vue'

const props = defineProps<{
  joke: SavedJoke
}>()
</script>

<template>
  <div class="bg-white rounded-lg p-4 mt-4">
    <CardHeader :joke="joke" />
    <CollectionCardContent :joke="joke" />
    <CollectionCardFooter :joke="joke" />
  </div>
</template>
