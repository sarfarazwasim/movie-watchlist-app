import { configureStore } from '@reduxjs/toolkit'
import movieStore from './movieStore'

export default configureStore({
  reducer: {
    movie: movieStore
  },
})