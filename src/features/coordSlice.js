import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getCoord } from '../../src/api/kakaoAPI'

export const fetchCoord = createAsyncThunk('/fetchCoord', async ({ query }) => {
   const response = await getCoord(query)
   return response.data
})

const coordSlice = createSlice({
   name: 'coord',
   initialState: {
      loading: false,
      coord: null,
      lon: null,
      lat: null,
      error: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchCoord.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchCoord.fulfilled, (state, action) => {
            state.loading = false
            state.lon = action.payload.documents[0].x
            state.lat = action.payload.documents[0].y
         })
         .addCase(fetchCoord.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})

export default coordSlice.reducer
