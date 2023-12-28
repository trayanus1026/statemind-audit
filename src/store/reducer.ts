import { combineReducers } from '@reduxjs/toolkit'
import clientSlice from './slices/client.slice'

const rootReducer = combineReducers({
  clientSlice
})

export default rootReducer