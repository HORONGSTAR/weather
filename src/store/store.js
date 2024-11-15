import { configureStore } from '@reduxjs/toolkit'
import localsReducer from '..//features/localsSlice'
import weathersSlice from '../features/weathersSlice'

const store = configureStore({
   reducer: {
      locals: localsReducer,
      weathers: weathersSlice,
   },
})

export default store
