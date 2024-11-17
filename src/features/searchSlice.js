import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getWeathers } from '../api/weatherAPI'

export const fetchSearchWeather = createAsyncThunk(
   '/fetchSearchWeather',
   async ({ type, lat, lon }) => {
      const response = await getWeathers(type, lat, lon)
      return response
   }
)

export const fetchSearchForecast = createAsyncThunk(
   '/fetchSearchForecast',
   async ({ type, lat, lon }) => {
      const response = await getWeathers(type, lat, lon)
      return response
   }
)

export const fetchSearchAir = createAsyncThunk('/fetchSearchAir', async ({ type, lat, lon }) => {
   const response = await getWeathers(type, lat, lon)
   return response
})

const searchSlice = createSlice({
   name: 'search',
   initialState: {
      loading: false,
      weathers: null,
      forecast: null,
      airdatas: null,
      error: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchSearchWeather.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchSearchWeather.fulfilled, (state, action) => {
            state.loading = false
            state.weathers = action.payload.data
         })
         .addCase(fetchSearchWeather.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
         .addCase(fetchSearchForecast.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchSearchForecast.fulfilled, (state, action) => {
            state.loading = false
            state.forecast = action.payload.data
         })
         .addCase(fetchSearchForecast.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
         .addCase(fetchSearchAir.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchSearchAir.fulfilled, (state, action) => {
            state.loading = false
            state.airdatas = action.payload.data
         })
         .addCase(fetchSearchAir.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})

export default searchSlice.reducer