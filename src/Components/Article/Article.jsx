import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import { ApiArticles } from '../../Api/Api.js'
import UserIcon from '../UserIcon'
import Heart from '../Heart'
import { loading, getCurrentPage } from '../../Redux/Slice'

import classes from './Article.module.scss'

function Article() {
  const dispatch = useDispatch()
  const apiArticles = new ApiArticles()

  const id = useParams()
  let element = useSelector((state) => state.blogReducer.currentPage)
  // let element = ''

  useEffect(() => {
    dispatch(loading())
    apiArticles.getCurrentArticle(id).then((e) => {
      // element = e
      // console.log(e)
      dispatch(getCurrentPage(e))
      dispatch(loading())
    })
  }, [])

  return (
    <section className={classes.list}>
      <div className={classes.header}>
        <div className={classes.title}>
          <span>{element.title}</span>
          <Heart favoritesCount={element.favoritesCount} />
        </div>
        <UserIcon el={element} />
      </div>
      <span className={classes.disc}>{element.description}</span>
      <div>{element.body}</div>
    </section>
  )
}

export default Article
