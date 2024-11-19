import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCoord } from '../features/coordSlice'
import { Select, InputLabel, MenuItem, FormControl } from '@mui/material'
import { cityDatas, address } from '../database/InternaLdata'
import WeatherDetail from './weather/WeatherDetail'
import AirPollutionDetail from './airPollution/AirPollutionDetail'

function CityTap({ page }) {
   const dispatch = useDispatch()
   const { lon, lat, loading, error } = useSelector((state) => state.coord)
   const [cityValue, setcityValue] = useState('')
   const [itemValue, setitemValue] = useState(null)

   const handleChangeCity = (e) => setcityValue(e.target.value)
   const handleChangeItem = (e) => setitemValue(e.target.value)

   useEffect(() => {
      if (itemValue) dispatch(fetchCoord({ query: itemValue }))
   }, [dispatch, itemValue])

   if (loading) return <p>Loading...</p>
   if (error) return <p>Error: {error}</p>

   const labelId = 'demo-simple-select-helper-label'

   return (
      <>
         <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id={labelId}>어느 지역의 날씨를 볼까요?</InputLabel>
            <Select labelId={labelId} value={cityValue} onChange={handleChangeCity} label="어느 곳의 날씨를 볼까요?">
               {cityDatas.map((cityData) => (
                  <MenuItem key={cityData.value} value={cityData.value}>
                     {cityData.name}
                  </MenuItem>
               ))}
            </Select>
         </FormControl>
         {cityValue && (
            <FormControl sx={{ m: 1, width: 300 }}>
               <InputLabel id={labelId}>우리 동네를 골라보아요!</InputLabel>
               <Select labelId={labelId} value={itemValue} onChange={handleChangeItem} label="우리 동네를 골라요!">
                  {address[cityValue].map((item) => (
                     <MenuItem key={cityDatas.name + item} value={item}>
                        {item}
                     </MenuItem>
                  ))}
               </Select>
            </FormControl>
         )}
         {page === 'weather' && <WeatherDetail itemValue={itemValue} lon={lon} lat={lat} />}
         {page === 'airPollution' && <AirPollutionDetail itemValue={itemValue} lon={lon} lat={lat} />}
      </>
   )
}

export default CityTap
