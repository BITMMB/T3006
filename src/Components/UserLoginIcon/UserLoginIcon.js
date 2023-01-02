import React, { useState, useEffect } from 'react'
// import { format } from 'date-fns'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { Authentication } from '../../Api/Api.js'
import { login } from '../../Redux/Slice'

import classes from './UserLoginIcon.module.scss'
import face from './face.png'

function UserLoginIcon() {
  const [user, setUser] = useState()
  const dispatch = useDispatch()
  const stateUser = useSelector((state) => state.blogReducer.user)
  const apiAuthentication = new Authentication()
  useEffect(() => {
    apiAuthentication.getuser().then((e) => {
      setUser(e.user)
      // console.log(user.username)
    })
  }, [stateUser])

  return (
    <div className={classes.block}>
      <Link to={'/profile'}>
        <div className={classes.userblock}>
          <div className={classes.user}>{user ? user.username : 'User'}</div>
          <div className={classes.face}>
            <img className={classes.faceimg} src={face} alt="like" />
          </div>
        </div>
      </Link>
      <Link to={'/'}>
        <button
          className={classes.in}
          onClick={() => {
            dispatch(login(false))
            localStorage.clear()
          }}
        >
          <div>Sign Out</div>
        </button>
      </Link>
    </div>
  )
}

export default UserLoginIcon
