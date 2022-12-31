import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  articles: [],
  skipNumber: 0,
  isLoading: false,
}

const blogSlice = createSlice({
  name: 'blog',
  initialState,

  reducers: {
    getarticles(state, action) {
      // state.articles = state.articles.concat(action.payload)
      state.articles = action.payload
      console.log(state.articles)
    },
    offset(state) {
      state.skipNumber = state.skipNumber + 5
    },
    loading(state) {
      console.log('load')
      state.isLoading = !state.isLoading
    },
  },
})

export const { getarticles, offset, loading } = blogSlice.actions

export default blogSlice.reducer
