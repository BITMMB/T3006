import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { Authentication } from '../../Api/Api.js'
import { getUser, login } from '../../Redux/Slice'

import classes from './SignIn.module.scss'

function SignIn() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const goHome = () => {
    navigate('/', { replace: true })
  }
  const [errorList, setErrorList] = useState(0)
  const apiAuthentication = new Authentication()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onBlur',
  })
  const onSubmit = (data) => {
    apiAuthentication.loginuser(data.email, data.password).then((e) => {
      if (e.errors) {
        console.log(e)
        setErrorList(e.errors)
      } else {
        console.log(e)
        localStorage.setItem('token', e.user.token)
        dispatch(getUser(e.user))
        dispatch(login(true))
        goHome()
      }
    })
    reset()
  }

  return (
    <div className={classes.main}>
      <div className={classes.block}>
        <div className={classes.title}>Sign In</div>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <label>
            Email address
            <input
              className={errors?.email || errorList ? classes.inputerror : classes.input}
              {...register('email', {
                required: true,
                pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
              })}
              placeholder="Email address"
            />
            {errorList ? <span className={classes.error}>Email or password is invalid</span> : null}
            {errors?.email?.type === 'required' && <span className={classes.error}>This field is required</span>}
            {errors?.email?.type === 'pattern' && <span className={classes.error}>Email is uncorrect</span>}
          </label>
          <label>
            Password
            <input
              className={errors?.password || errorList ? classes.inputerror : classes.input}
              {...register('password', {
                required: true,
              })}
              placeholder="Password"
            />
            {errorList ? <span className={classes.error}>Email or password is invalid</span> : null}
            {errors?.password?.type === 'required' && <span className={classes.error}>This field is required</span>}
          </label>
          <input type="submit" className={classes.submit} />
        </form>
        <span className={classes.have}>
          Don’t have an account? <Link to={'/sign-up'}>Sign Up.</Link>
        </span>
      </div>
    </div>
  )
}

export default SignIn
