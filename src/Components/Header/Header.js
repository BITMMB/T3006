import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import BtnSignInUp from '../BtnSignInUp'
import UserLoginIcon from '../UserLoginIcon'
import { login } from '../../Redux/Slice'

import classes from './Header.module.scss'

function Header() {
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')

  const isLogin = useSelector((state) => state.blogReducer.isLogin)

  useEffect(() => {
    if (token) {
      // console.log(token)
      dispatch(login(true))
    }
  }, [])

  return (
    <div className={classes.header}>
      <div className={classes.back}>
        <Link to="/">
          <span>Realworld Blog</span>
        </Link>
      </div>
      {isLogin ? <UserLoginIcon /> : <BtnSignInUp />}
    </div>
  )
}

export default Header
