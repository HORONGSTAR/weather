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

const searchSlice = createSlice({
   name: 'search',
   initialState: {
      loading: false,
      search: null,
      forecasts: null,
      error: null,
   },
   reducers: {
      reset: (state, action) => {
         state.search = action.payload
         state.forecasts = action.payload
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchSearchWeather.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchSearchWeather.fulfilled, (state, action) => {
            state.loading = false
            state.search = action.payload.data
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
            state.forecasts = action.payload.data.list
         })
         .addCase(fetchSearchForecast.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})

export default searchSlice.reducer
export const { reset } = searchSlice.actions
