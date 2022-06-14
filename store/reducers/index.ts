import {createSlice} from '@reduxjs/toolkit'

// const initialState = {
//   clicks: 0,
// }

// function counterReducer(state = initialState, action) {
//   if (action.type === INCREMENT) {
//     return {
//       ...state,
//       clicks: state.clicks + 1,
//     }
//   }

//   if (action.type === RESET) {
//     return {
//       ...state,
//       clicks: 0,
//     }
//   }

//   return state
// }

// export default counterReducer

// THIS FILE SHOULD BE NAMED ACCORDINGLY TO THE NAME OF THE SLICE
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    reset: state => {
      state.value = 0
    },
  },
})

export const {increment, reset} = counterSlice.actions

export default counterSlice.reducer
