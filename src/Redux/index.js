import { configureStore } from '@reduxjs/toolkit'

import bReducer from './Slice'

export default configureStore({
  reducer: {
    blogReducer: bReducer,
  },
})
