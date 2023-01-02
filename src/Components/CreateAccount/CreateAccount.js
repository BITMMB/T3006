import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

// import { useDispatch, useSelector } from 'react-redux'
import { Authentication } from '../../Api/Api.js'
import { getUser } from '../../Redux/Slice'

import classes from './CreateAccount.module.scss'

function CreateAccount() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [errorList, setErrorList] = useState(0)
  const goSignIn = () => {
    navigate('/sign-in', { replace: true })
  }
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
    apiAuthentication.register(data.username, data.email, data.password).then((e) => {
      if (e.errors) {
        console.log(e)
        setErrorList(e.errors)
      } else {
        console.log(e)
        localStorage.setItem('token', e.user.token)
        dispatch(getUser(e.user))
        goSignIn()
      }
    })
    reset()
  }
  return (
    <div className={classes.main}>
      <div className={classes.block}>
        <div className={classes.title}>Create new account</div>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <input
            className={errors?.username || errorList?.username ? classes.inputerror : classes.input}
            {...register('username', {
              required: {
                value: true,
                message: 'string',
              },
              minLength: {
                value: 3,
                message: 'error message',
              },
              maxLength: {
                value: 20,
                message: 'error message',
              },
            })}
            placeholder="Username"
          />
          <div className={classes.blockerror}>
            {errorList?.username ? <span className={classes.error}>This login is already taken</span> : null}
            {errors?.username?.type === 'required' && <span className={classes.error}>This field is required</span>}
            {errors?.username?.type === 'minLength' && <span className={classes.error}>Min length is 3</span>}
            {errors?.username?.type === 'maxLength' && <span className={classes.error}>Max length is 20</span>}
          </div>
          <input
            className={errors?.email || errorList?.email ? classes.inputerror : classes.input}
            {...register('email', {
              required: {
                value: true,
                message: 'string',
              },
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: 'error message',
              },
            })}
            placeholder="Email address"
          />
          <div className={classes.blockerror}>
            {errorList?.email ? <span className={classes.error}>This email is already taken</span> : null}
            {errors?.email?.type === 'required' && <span className={classes.error}>This field is required</span>}
            {errors?.email?.type === 'pattern' && <span className={classes.error}>Email is uncorrect</span>}
          </div>
          <input
            className={errors?.password ? classes.inputerror : classes.input}
            {...register('password', {
              required: {
                value: true,
                message: 'string',
              },
              minLength: {
                value: 6,
                message: 'error message',
              },
              maxLength: {
                value: 20,
                message: 'error message',
              },
            })}
            placeholder="Password"
          />
          <div className={classes.blockerror}>
            {errors?.password?.type === 'required' && <span className={classes.error}>This field is required</span>}
            {errors?.password?.type === 'minLength' && <span className={classes.error}>Min length is 6</span>}
            {errors?.password?.type === 'maxLength' && <span className={classes.error}>Max length is 20</span>}
          </div>
          <input
            className={errors?.repassword ? classes.inputerror : classes.input}
            {...register('repassword', {
              required: {
                value: true,
                message: 'string',
              },
            })}
            placeholder="Repeat Password"
          />
          <div className={classes.blockerror}>
            {errors?.repassword?.type === 'required' && <span className={classes.error}>This field is required</span>}
          </div>
          <input type="submit" className={classes.submit} />
        </form>
        <span className={classes.have}>
          Already have an account? <Link to={'/sign-in'}>Sign In.</Link>
        </span>
      </div>
    </div>
  )
}

export default CreateAccount
