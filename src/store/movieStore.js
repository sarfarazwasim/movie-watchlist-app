import { createSlice } from '@reduxjs/toolkit'

export const movieStore = createSlice({
  name: 'movie',
  initialState: {
    movieList: [],
    userId: ''
  },
  reducers: {
    setMovieList: (state, data) => {
      state.movieList = data.payload
    },
    setUserId: (state, data) => {
      state.userId = data.payload
    }
  },
})

export const { setMovieList, setUserId } = movieStore.actions

export default movieStore.reducer