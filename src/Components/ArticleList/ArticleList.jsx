import React from 'react'
import { useSelector } from 'react-redux'
// import Spiner from '../Spiner'
import { v4 as uuidv4 } from 'uuid'

import ArticleSmall from '../ArticleSmall'
// import { getarticles, offset } from '../../Redux/Slice'

import classes from './ArticleList.module.scss'

function ArticleList() {
  const articles = useSelector((state) => state.blogReducer.articles)

  const element = articles.map((el) => <ArticleSmall el={el} key={uuidv4()} />)

  // console.log(element)
  return <div className={classes.list}>{element}</div>
}

export default ArticleList
