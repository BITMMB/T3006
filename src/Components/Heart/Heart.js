import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'

import classes from './Heart.module.scss'
import heart from './heart1.png'
// import heartRed from './heart_red.png'

function Heart() {
  return (
    <div className={''}>
      <img src={heart} className={classes.heart} alt="like" />
      <span className={classes.counter}>12</span>
    </div>
  )
}

export default Heart
