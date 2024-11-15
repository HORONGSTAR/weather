import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getLocals } from '../../src/api/kakaoAPI'

export const fetchLocals = createAsyncThunk('/fetchLocals', async ({ query }) => {
   const response = await getLocals(query) //value1 값은 나중에 컴포넌트에서 지정
   return response.data
})

const localsSlice = createSlice({
   name: 'locals',
   initialState: {
      localsLoading: false,
      locals: null,
      localsError: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchLocals.pending, (state) => {
            state.localsLoading = true
            state.localsError = null
         })
         .addCase(fetchLocals.fulfilled, (state, action) => {
            state.localsLoading = false
            state.locals = [Number(action.payload.documents[0].y).toFixed(2), Number(action.payload.documents[0].x).toFixed(2)]
            console.log(state.locals)
         })
         .addCase(fetchLocals.rejected, (state, action) => {
            state.localsLoading = false
            state.localsError = action.error.message
         })
   },
})

export default localsSlice.reducer
