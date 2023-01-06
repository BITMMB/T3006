import React, { useEffect } from 'react'
// import { format } from 'date-fns'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { Authentication } from '../../Api/Api.js'
import { getUser, login } from '../../Redux/Slice'

import classes from './UserLoginIcon.module.scss'
import face from './face.png'

function UserLoginIcon() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.blogReducer.user)

  const apiAuthentication = new Authentication()
  useEffect(() => {
    apiAuthentication.getuser().then((e) => {
      dispatch(getUser(e.user))
    })
  }, [])

  return (
    <div className={classes.block}>
      <Link to={'/new-article'}>
        <div className={classes.create}>Create article</div>
      </Link>
      <Link to={'/profile'}>
        <div className={classes.userblock}>
          <div className={classes.user}>{user ? user.username : 'User'}</div>
          <div className={classes.face}>
            {user ? (
              <img className={classes.faceimg} src={user.image} alt="user photo" />
            ) : (
              <img className={classes.faceimg} src={face} alt="user photo" />
            )}
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
