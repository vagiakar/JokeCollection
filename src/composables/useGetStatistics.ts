import { useCollectionStore } from '@/stores/useCollectionStore'
import { storeToRefs } from 'pinia'

export function useGetStatistics() {
  const store = useCollectionStore()
  const { jokeCollection } = storeToRefs(store)

  const getJokeCount = () => jokeCollection.value.length
  const getAverageStars = () => {
    const ratedJokes = jokeCollection.value.filter((joke) => joke.stars !== undefined)
    if (ratedJokes.length === 0) return

    const total = ratedJokes.reduce((acc, curr) => acc + (curr?.stars || 0), 0)
    return total / ratedJokes.length
  }

  return { getJokeCount, getAverageStars }
}
