import { configureStore, Action } from "@reduxjs/toolkit"
import { ThunkAction } from 'redux-thunk'
import rootReducer from './reducer'

const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>

export default store