import { configureStore } from '@reduxjs/toolkit'
import coordReducer from '../features/coordSlice'
import searchReducer from '../features/searchSlice'
import searchSlice from '../features/searchSlice'
import localReducer from '../features/localSlice'

const store = configureStore({
   reducer: {
      coord: coordReducer,
      search: searchReducer,
      local: localReducer,
   },
})

export default store
