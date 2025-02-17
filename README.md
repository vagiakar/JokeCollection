# JokeCollection

## Project Overview

This project is built using Vue and fetches jokes from the Official Joke API. It uses Vite for bundling, Tailwind CSS for styling, and TypeScript for type safety. Users can save fetched jokes to localStorage, and Pinia is used for state management, allowing easy access to saved jokes throughout the app.Vue Router is used for handling navigation, with two main routes:

- Discovery: Where users can fetch new jokes.

- Collection: Where users can view and manage saved jokes stored in localStorage.

## Features added

### 1. Jokes

- Fetch and display random jokes
- Toggle between random jokes and programming jokes
- Display joke setup and punchline with a reveal animation
- Show loading states during API calls
- Handle API errors gracefully

### 2. Joke Collection

- Save favorite jokes to a personal collection
- Remove jokes from the collection
- Persist collection in localStorage
- Rate jokes (1-5 stars)
- Display collection statistics:
  - Total jokes saved
  - Average rating

## How to run

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
