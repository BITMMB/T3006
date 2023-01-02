import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Pagination } from 'antd'
import { Routes, Route } from 'react-router-dom'
import 'antd/dist/antd.css'

import { ApiArticles } from '../../Api/Api.js'
import { getarticles, loading, offset, getarticlescount } from '../../Redux/Slice'
import ArticleList from '../ArticleList'
import Header from '../Header'
// import Spiner from '../Spiner/'
import Article from '../Article'
import CreateAccount from '../CreateAccount'
import SignIn from '../SignIn'
import Profile from '../Profile'

// import { ArticleList } from './pages/ArticleList'
// import { Article } from './pages/Article'
import classes from './App.module.scss'

function App() {
  const dispatch = useDispatch()

  // const isLoading = useSelector((state) => state.blogReducer.isLoading)
  const skipNumber = useSelector((state) => state.blogReducer.skipNumber) * 5
  // const articles = useSelector((state) => state.blogReducer.articles)
  // const articlescount = useSelector((state) => state.blogReducer.articlescount)

  const apiArticles = new ApiArticles()

  function getres(skipNumber) {
    dispatch(loading())
    apiArticles.getArticleList(skipNumber).then((a) => {
      dispatch(getarticles(a.articles))
      dispatch(getarticlescount(a.articlesCount))
      dispatch(loading())
    })
  }
  useEffect(() => {
    getres(skipNumber)
  }, [])

  return (
    <div className={classes.app}>
      <Header />
      {/* {isLoading ? <Spiner /> : <ArticleList />}
      <Article /> */}

      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/:id" element={<Article />} />
        <Route path="/sign-up" element={<CreateAccount />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/" element={<ArticleList />} /> */}
        {/* <Route path="/" element={<ArticleList />} /> */}
        {/* <Route path="/" element={<ArticleList />} /> */}
      </Routes>

      <Pagination
        defaultCurrent={1}
        // total={articlescount}
        total={5000}
        onChange={(e) => {
          dispatch(offset(e))
          getres(e * 5)
        }}
      />
    </div>
  )
}

// make outlet
// checkbox create
// rewrite pass
// loading on create etd
// rename button

export default App
