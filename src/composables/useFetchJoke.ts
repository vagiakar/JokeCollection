import { ref, onMounted, watch, type Ref } from 'vue'
import { type Joke, type JokeType } from '@/types/JokeTypes'
import { API_URLS } from '@/constants/apiUrls'

export function useFetchJoke(selectedType: Ref<JokeType>) {
  const joke = ref<Joke | null>(null)
  const loading = ref<boolean>(true)
  const errorMessage = ref<string | null>(null)

  const fetchJoke = async () => {
    loading.value = true
    errorMessage.value = null
    const url = selectedType.value === 'random' ? API_URLS.randomJoke : API_URLS.programmingJoke

    try {
      const response = await fetch(url)
      if (!response.ok) throw new Error(`API Error: ${response.statusText}`)

      const result: Joke | Joke[] = await response.json()
      joke.value = Array.isArray(result) ? result?.[0] : result
    } catch (error) {
      errorMessage.value = 'Failed to fetch joke. Try again!'
    } finally {
      loading.value = false
    }
  }

  onMounted(fetchJoke)

  watch(() => selectedType, fetchJoke)

  return { joke, loading, errorMessage, fetchJoke }
}
