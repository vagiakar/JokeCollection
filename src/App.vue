<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <header>
    <Navbar />
  </header>
  <main>
    <div class="bg-gray-900 min-h-screen p-4">
      <div class="max-w-5xl mx-auto">
        <RouterView />
      </div>
    </div>
  </main>
</template>
