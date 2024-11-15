import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getWeathers } from '../../src/api/weatherAPI'

export const fetchWeathers = createAsyncThunk('/fetchWeathers', async ({ type, lat, lon }) => {
   const response = await getWeathers(type, lat, lon)
   return response
})

const weathersSlice = createSlice({
   name: 'weathers',
   initialState: {
      weathersLoading: false,
      weathers: null,
      weathersError: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchWeathers.pending, (state) => {
            state.weathersLoading = true
            state.weathersError = null
         })
         .addCase(fetchWeathers.fulfilled, (state, action) => {
            state.weathersLoading = false
            state.weathers = action.payload.data
         })
         .addCase(fetchWeathers.rejected, (state, action) => {
            state.weathersLoading = false
            state.weathersError = action.error.message
         })
   },
})

export default weathersSlice.reducer
