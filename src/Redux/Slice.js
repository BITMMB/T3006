import { createSlice } from '@reduxjs/toolkit'

// import { ApiArticles } from '../Api/Api.js'

// const apiArticles = new ApiArticles()

const initialState = {
  articles: [],
  articlescount: 0,
  skipNumber: 0,
  isLoading: false,
  currentPage: '',
}

const blogSlice = createSlice({
  name: 'blog',
  initialState,

  reducers: {
    getarticles(state, action) {
      state.articles = action.payload
    },
    getarticlescount(state, action) {
      state.articlescount = action.payload
    },
    offset(state, action) {
      state.skipNumber = action.payload
    },
    loading(state) {
      state.isLoading = !state.isLoading
    },
    getCurrentPage(state, action) {
      state.currentPage = action.payload
    },
  },
})

export const { getarticles, offset, loading, getarticlescount, getCurrentPage } = blogSlice.actions

export default blogSlice.reducer
