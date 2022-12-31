import React from 'react'
// import { useSelector } from 'react-redux'

import Heart from '../Heart'

import face from './face.png'
import classes from './ArticleSmall.module.scss'

function ArticleSmall() {
  // const article = useSelector((state) => {
  //   state.articles
  // })

  return (
    <div className={classes.article}>
      <div className={classes.title}>
        Some article title
        <Heart />
      </div>
      <span className={classes.tags}>Tag1</span>
      <span className={classes.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.{' '}
      </span>
      <div className={classes.user}>
        <span>John Doe</span>
        <span className={classes.date}>March 5, 2020 </span>
      </div>
      <div className={classes.face}>
        <img className={classes.faceimg} src={face} alt="like" />
      </div>
    </div>
  )
}

export default ArticleSmall
// classes.article
