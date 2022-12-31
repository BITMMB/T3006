import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import BtnSignInUp from '../BtnSignInUp'

import classes from './Header.module.scss'

function Header() {
  return (
    <Link to="/">
      <div className={classes.header}>
        <span>Realworld Blog</span>
        <BtnSignInUp />
      </div>
    </Link>
  )
}

export default Header
