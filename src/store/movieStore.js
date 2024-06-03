import { createSlice } from '@reduxjs/toolkit'

export const movieStore = createSlice({
  name: 'movie',
  initialState: {
    value: 0,
    movieList: [],
    userId: ''
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    setMovieList: (state, data) => {
      state.movieList = data.payload
    },
    setUserId: (state, data) => {
      state.userId = data.payload
    }
  },
})

export const { increment, decrement, incrementByAmount, setMovieList } = movieStore.actions

export default movieStore.reducer