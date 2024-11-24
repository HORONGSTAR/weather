import { createSlice } from '@reduxjs/toolkit'

const itemSlice = createSlice({
   name: 'item',
   initialState: { items: null },
   reducers: {
      add: (state, action) => {
         state.items = action.payload
      },
   },
})

export const { add } = itemSlice.actions
export default itemSlice.reducer
