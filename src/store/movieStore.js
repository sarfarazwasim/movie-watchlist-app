import { createSlice } from '@reduxjs/toolkit'

export const movieStore = createSlice({
  name: 'movie',
  initialState: {
    movieList: [],
    userId: localStorage.getItem('userId') || '',
    watchList: JSON.parse(localStorage.getItem('watchList') || '{}')
  },
  reducers: {
    setMovieList: (state, data) => {
      state.movieList = data.payload
    },
    setUserId: (state, data) => {
      state.userId = data.payload
      localStorage.setItem('userId', state.userId)
    },
    setWatchList: (state, {payload}) => {
      const storedList = localStorage.getItem('watchList') || '{}'
      state.watchList = JSON.parse(storedList)
      if (payload.isAddMovie) {
        const idx = state.watchList[state.userId][payload.listIndex].movies.findIndex((item) => item.imdbID === payload.movie.imdbID)
        if (idx < 0) {
          state.watchList[state.userId][payload.listIndex].movies.push(payload.movie)
        } else {
          alert(`Movie already exists in '${state.watchList[state.userId][payload.listIndex].name}' watchlist`)
        }
      } else if (payload.removeMovie) {
        state.watchList[state.userId][payload.listIndex].movies.splice(payload.movieIndex, 1)
      } else {
        const value = {
          name: payload.name,
          description: payload.description,
          movies: []
        }
        if (state.watchList[state.userId]) {
          console.log('[if log]', state.watchList[state.userId])
          state.watchList[state.userId].push(value)
        } else {
          console.log('[in else log]', state.userId)
          state.watchList[state.userId] = []
          state.watchList[state.userId].push(value)
        }
      }
      console.log('Final', state.watchList)
      localStorage.setItem('watchList', JSON.stringify(state.watchList))
    }
  },
})

export const { setMovieList, setUserId, setWatchList } = movieStore.actions

export default movieStore.reducer