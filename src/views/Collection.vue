<script setup lang="ts">
import { useCollectionStore } from '@/stores/useCollectionStore'

const { jokeCollection } = useCollectionStore()
</script>

<template>
  <div v-if="jokeCollection.length > 0">
    <h2>Collection</h2>
    <ul>
      <li v-for="joke in jokeCollection" :key="joke.id">
        <p><strong>Joke Type:</strong> {{ joke.type }}</p>
        <h3>{{ joke.setup }}</h3>
        <p>{{ joke.punchline }}</p>
      </li>
    </ul>
  </div>
  <div v-else>
    <p>No jokes in collection</p>
  </div>
</template>
