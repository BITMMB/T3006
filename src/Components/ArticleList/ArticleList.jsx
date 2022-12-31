import React from 'react'
import { useSelector } from 'react-redux'

import Spiner from '../Spiner'
// import { v4 as uuidv4 } from 'uuid'

// import ArticleSmall from '../ArticleSmall'
// import { getarticles, offset } from '../../Redux/Slice'

import classes from './ArticleList.module.scss'

function ArticleList() {
  // const articles = useSelector((state) => {
  //   state.blogReducer.articles
  // })
  const isLoading = useSelector((state) => {
    state.blogReducer.isLoading
  })

  // const element = list.filter((item, index) => {
  //   item[index] < 5
  // })

  console.log(isLoading)
  return <div className={classes.list}>xasadasds</div>
}

export default ArticleList
