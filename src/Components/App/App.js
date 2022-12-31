import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ApiArticles } from '../../Api/Api.js'
import { getarticles, loading } from '../../Redux/Slice'
// import classes from './App.module.scss'
import ArticleList from '../ArticleList'

function App() {
  const dispatch = useDispatch()
  const isLoading = useSelector((state) => {
    state.blogReducer.isLoading
  })
  // const authentication = new Authentication()
  const apiArticles = new ApiArticles()
  function getres() {
    dispatch(loading())
    apiArticles.getArticleList().then((a) => {
      // console.log(a.articles)
      dispatch(getarticles(a.articles))
      dispatch(loading())
      console.log(isLoading)
    })
  }
  useEffect(() => {
    getres()
  }, [])

  // getres()

  return (
    <div className={'1'}>
      {/* <Spiner /> */}
      <ArticleList />
    </div>
  )
}

export default App
