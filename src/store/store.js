import { configureStore } from '@reduxjs/toolkit'
import coordReducer from '../features/coordSlice'
import searchReducer from '../features/searchSlice'
import localReducer from '../features/localSlice'
import itemReducer from '../features/itemSlice'

const store = configureStore({
   reducer: {
      coord: coordReducer,
      search: searchReducer,
      local: localReducer,
      item: itemReducer,
   },
})

export default store
