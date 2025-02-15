export interface Joke {
  type: string
  setup: string
  punchline: string
  id: string
}

export type JokeType = 'random' | 'programming'
