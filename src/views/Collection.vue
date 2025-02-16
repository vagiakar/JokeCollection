<script setup lang="ts">
import { useCollectionStore } from '@/stores/useCollectionStore'
import CollectionCard from '@/components/collection/CollectionCard.vue'
import { storeToRefs } from 'pinia'

const store = useCollectionStore()
const { jokeCollection } = storeToRefs(store)
</script>

<template>
  <div v-if="jokeCollection.length > 0">
    <h2 class="text-2xl text-gray-200 font-bold text-center p-4">Your saved jokes</h2>
    <ul>
      <li v-for="joke in jokeCollection" :key="joke.id">
        <CollectionCard :joke="joke" />
      </li>
    </ul>
  </div>
  <div v-else>
    <h2 class="text-2xl text-gray-200 font-bold text-center p-4">No jokes in collection!</h2>
  </div>
</template>
