import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { ApiArticles } from '../../Api/Api.js'

import classes from './PopUp.module.scss'
import pic from './Frame.png'

function PopUp({ popActive, setPopActive }) {
  const navigate = useNavigate()

  const apiArticles = new ApiArticles()

  const element = useSelector((state) => state.blogReducer.currentPage)

  const goHome = () => {
    navigate('/', { replace: true })
  }

  return (
    <div
      className={popActive ? `${classes.block} ${classes.active}` : classes.block}
      onClick={() => {
        setPopActive(false)
      }}
    >
      <div
        className={classes.up}
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <div className={classes.text}>
          <img className={classes.pic} src={pic} />
          <span>Are you sure to delete this article?</span>
        </div>
        <div className={classes.btnblock}>
          <button
            className={classes.no}
            onClick={() => {
              setPopActive(false)
            }}
          >
            No
          </button>
          <button
            className={classes.yes}
            onClick={() => {
              apiArticles
                .deleteArgticle(element.slug)
                .then((e) => {
                  console.log(e)
                  goHome()
                })
                .catch((e) => {
                  console.log(e)
                })
            }}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  )
}

export default PopUp
