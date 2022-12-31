import React from 'react'
import { Button, Space } from 'antd'
// import { useDispatch, useSelector } from 'react-redux'
// import classes from './BtnSignInUp.module.scss'

function BtnSignInUp() {
  return (
    <div className={''}>
      <Space wrap>
        <Button type="primary">sign in</Button>
        <Button>sign iup</Button>
      </Space>
    </div>
  )
}

export default BtnSignInUp
