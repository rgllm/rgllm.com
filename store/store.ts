// import {createStore} from 'redux'
// import rootReducer from './reducers/index'

// const store = createStore(rootReducer)

// export default store

import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './reducers'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})
