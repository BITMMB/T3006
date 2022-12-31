import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

// import 'antd/dist/antd.css'
import store from './Redux/index.js'
import App from './Components/App'
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)
