import type { Joke } from '@/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { type SavedJoke } from '@/types'

export const useCollectionStore = defineStore('jokesCollection', () => {
  const getJokesFromStorage = () => JSON.parse(localStorage.getItem('jokeCollection') || '[]')
  const jokeCollection = ref<SavedJoke[]>(getJokesFromStorage())

  const loadJokesFromStorage = () => {
    jokeCollection.value = getJokesFromStorage()
  }

  const saveJokesToStorage = () => {
    localStorage.setItem('jokeCollection', JSON.stringify(jokeCollection.value))
  }

  const saveJoke = (newJoke: Joke) => {
    const exists = jokeCollection.value.some((j) => j.id === newJoke.id)
    if (!exists) {
      jokeCollection.value.push(newJoke)
      saveJokesToStorage()
    }
  }

  const removeJoke = (jokeToRemove: Joke) => {
    jokeCollection.value = jokeCollection.value.filter((joke) => joke.id !== jokeToRemove.id)
    saveJokesToStorage()
  }

  const addStars = (jokeId: string, stars: number) => {
    const jokeIndex = jokeCollection.value.findIndex((joke) => joke.id === jokeId)
    if (jokeIndex !== -1) {
      jokeCollection.value[jokeIndex].stars = stars
    }
    saveJokesToStorage()
  }

  return { jokeCollection, saveJoke, loadJokesFromStorage, removeJoke, addStars }
})
