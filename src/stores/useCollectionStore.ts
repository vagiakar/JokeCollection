import type { Joke } from '@/types/JokeTypes'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCollectionStore = defineStore('jokesCollection', () => {
  const getJokesFromStorage = () => JSON.parse(localStorage.getItem('jokeCollection') || '[]')
  const jokeCollection = ref<Joke[]>(getJokesFromStorage())

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

  return { jokeCollection, saveJoke, loadJokesFromStorage, removeJoke }
})
