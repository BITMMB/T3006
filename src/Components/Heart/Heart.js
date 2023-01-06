import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
// import { useLocation } from 'react-router-dom'

import { ApiArticles } from '../../Api/Api.js'
import { changedMark } from '../../Redux/Slice'

import classes from './Heart.module.scss'
import heart from './heart1.png'
import heartRed from './heart_red.png'

function Heart({ element }) {
  const apiArticles = new ApiArticles()
  const dispatch = useDispatch()

  let [isFavorite, setIsFavorite] = useState(element.favorited)
  let [count, setCount] = useState(element.favoritesCount)

  const mark = () => {
    let type = isFavorite ? 'DELETE' : 'POST'
    let newCount = isFavorite ? count - 1 : count + 1
    setIsFavorite(!isFavorite)
    setCount(newCount)
    apiArticles
      .markAsFavoriteArgticle(element.slug, type)
      .then((e) => {
        dispatch(changedMark())
        console.log(e)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return (
    <div className={classes.block}>
      <button
        className={classes.likebtn}
        onClick={() => {
          mark()
        }}
      >
        {isFavorite ? (
          <img src={heartRed} className={classes.heart} alt="like" />
        ) : (
          <img src={heart} className={classes.heart} alt="like" />
        )}
      </button>
      <div className={classes.counter}>{count}</div>
    </div>
  )
}

export default Heart
