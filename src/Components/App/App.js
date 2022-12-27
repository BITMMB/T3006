import React from 'react'

import { Articles } from '../../Api/Api.js'

// import { useDispatch, useSelector } from 'react-redux'
// import classes from './App.module.scss'

function App() {
  // const authentication = new Authentication()
  const articles = new Articles()

  articles.getArticleList().then((a) => {
    console.log(a)
  })

  return <div className={''}></div>
}

export default App
