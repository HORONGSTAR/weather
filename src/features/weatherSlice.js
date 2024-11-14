import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getWeather } from '../api/openweatherAPI'

export const fetchWeather = createAsyncThunk('/fetchWeather', async () => {
   const response = await getWeather()
   return response
})

const weatherSlice = createSlice({
   name: 'weather',
   initialState: {
      loading: false,
      weather: [],
      error: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchWeather.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchWeather.fulfilled, (state, action) => {
            state.loading = false
            state.weather = action.payload
         })
         .addCase(fetchWeather.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})
export default weatherSlice.reducer
