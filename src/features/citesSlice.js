import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getCityWeathers } from '../../src/api/weatherAPI'

export const fetchCityWeathers = createAsyncThunk('/fetchCityWeathers', async ({ q }) => {
   const response = await getCityWeathers(q)
   return response
})

const weathersSlice = createSlice({
   name: 'cites',
   initialState: {
      citesLoading: false,
      cites: {
         'Gyeonggi-do': null,
         'Gangwon-do': null,
         'Chungcheongbuk-do': null,
         'Chungcheongnam-do': null,
         'Jeollabuk-do': null,
         'Jeollanam-do': null,
         'Gyeongsangbuk-do': null,
         'Gyeongsangnam-do': null,
         'Jeju-do': null,
      },
      citesError: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchCityWeathers.pending, (state) => {
            state.citesLoading = true
            state.citesError = null
         })
         .addCase(fetchCityWeathers.fulfilled, (state, action) => {
            state.citesLoading = false
            state.cites[action.payload.data.name] = action.payload.data
         })
         .addCase(fetchCityWeathers.rejected, (state, action) => {
            state.citesLoading = false
            state.citesError = action.error.message
         })
   },
})

export default weathersSlice.reducer
