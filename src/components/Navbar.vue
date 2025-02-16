<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="bg-blue-900 text-white p-4 flex justify-between items-center">
    <h1 class="text-2xl font-bold">Jokes</h1>
    <ul class="flex items-center">
      <li class="mr-4">
        <router-link class="text-lg font-bold hover:text-blue-200" to="/">Discovery</router-link>
      </li>
      <li>
        <router-link class="text-lg font-bold hover:text-blue-200" to="/collection"
          >Collection</router-link
        >
      </li>
    </ul>
  </nav>
</template>
