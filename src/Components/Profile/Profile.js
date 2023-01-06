import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { Authentication } from '../../Api/Api.js'
import { getUser } from '../../Redux/Slice'

import classes from './Profile.module.scss'

function Profile() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [errorList, setErrorList] = useState(0)
  const goHome = () => {
    navigate('/', { replace: true })
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
    console.log(data)
    let res = {}
    for (let key in data) {
      if (data[key].length > 0) {
        res[key] = data[key]
      }
    }

    apiAuthentication.updateProfile(res).then((e) => {
      console.log(e)
      if (e.errors) {
        console.log(e)
        setErrorList(e.errors)
      } else {
        console.log(e)
        dispatch(getUser(''))
        goHome()
      }
    })
    reset()
  }
  return (
    <div className={classes.main}>
      <div className={classes.block}>
        <div className={classes.title}>Edit Profile</div>
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
              minLength: {
                value: 6,
                message: 'error message',
              },
              maxLength: {
                value: 20,
                message: 'error message',
              },
            })}
            placeholder="New password"
          />
          <div className={classes.blockerror}>
            {errors?.password?.type === 'minLength' && <span className={classes.error}>Min length is 6</span>}
            {errors?.password?.type === 'maxLength' && <span className={classes.error}>Max length is 20</span>}
          </div>
          <input
            className={errors?.url ? classes.inputerror : classes.input}
            {...register('image', {
              pattern: {
                value: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/,
                message: 'error message',
              },
            })}
            placeholder="Avatar image (url)"
          />
          <div className={classes.blockerror}>
            {errors?.url?.type === 'pattern' && <span className={classes.error}>Paste validate url</span>}
          </div>
          <input type="submit" className={classes.submit} />
        </form>
      </div>
    </div>
  )
}

export default Profile
