import { configureStore } from '@reduxjs/toolkit'
import localsReducer from '../features/localsSlice'
import weathersSlice from '../features/weathersSlice'
import citesSlice from '../features/citesSlice'

const store = configureStore({
   reducer: {
      locals: localsReducer,
      weathers: weathersSlice,
      cites: citesSlice,
   },
})

export default store
