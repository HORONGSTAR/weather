import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getWeathers } from '../api/weatherAPI'
import { keys } from '../database/InternaLdata'

export const fetchLocalWeather = createAsyncThunk('/fetchLocalWeather', async ({ type, lat, lon }) => {
   const response = await getWeathers(type, lat, lon)
   return response
})

export const fetchLocalAir = createAsyncThunk('/fetchLocalAir', async ({ type, lat, lon }) => {
   const response = await getWeathers(type, lat, lon)
   return response
})

const localSlice = createSlice({
   name: 'local',
   initialState: {
      loading: false,
      weathers: { ...keys },
      airdatas: { ...keys },
      error: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchLocalWeather.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchLocalWeather.fulfilled, (state, action) => {
            state.loading = false
            state.weathers[action.payload.data.coord.lon + '.' + action.payload.data.coord.lat] = action.payload.data
         })
         .addCase(fetchLocalWeather.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
         .addCase(fetchLocalAir.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchLocalAir.fulfilled, (state, action) => {
            state.loading = false
            state.airdatas[action.payload.data.coord.lon + '.' + action.payload.data.coord.lat] = action.payload.data
         })
         .addCase(fetchLocalAir.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})

export default localSlice.reducer
