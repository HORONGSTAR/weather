import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLocals } from '../../features/localsSlice'
import WeatherCard from './WeatherCard'
import ForecastCard from './ForecastCard'
import WeatherDetail from './WeatherDetail'
import { Select, Grid, InputLabel, MenuItem, FormControl } from '@mui/material'
import { cites, address } from '../../features/InternaLdata'

function CityTap() {
   const dispatch = useDispatch()
   const { locals, localsLoading, localsError } = useSelector((state) => state.locals)
   const [cityValue, setcityValue] = useState('')
   const [itemValue, setitemValue] = useState('울릉군')

   const handleChangeCity = (e) => setcityValue(e.target.value)
   const handleChangeItem = (e) => setitemValue(e.target.value)

   useEffect(() => {
      dispatch(fetchLocals({ query: itemValue }))
   }, [dispatch, itemValue])

   if (localsLoading) return <p>Loading...</p>
   if (localsError) return <p>Error: {localsError}</p>
   return (
      <>
         <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="cityLabel">어느 지역의 날씨를 볼까요?</InputLabel>
            <Select labelId="cityLabel" value={cityValue} onChange={handleChangeCity}>
               {cites.map((city) => (
                  <MenuItem key={city.value} value={city.value}>
                     {city.name}
                  </MenuItem>
               ))}
            </Select>
         </FormControl>
         {cityValue && (
            <FormControl sx={{ m: 1, width: 300 }}>
               <InputLabel id="itemLabel">우리 동네를 골라보아요!</InputLabel>
               <Select labelId="itemLabel" value={itemValue} onChange={handleChangeItem}>
                  {address[cityValue].map((item) => (
                     <MenuItem key={cites.name + item} value={item}>
                        {item}
                     </MenuItem>
                  ))}
               </Select>
            </FormControl>
         )}
         <Grid container spacing={2}>
            <Grid size={8}>
               <WeatherCard locals={locals} />
            </Grid>
            <Grid ize={4}>
               <WeatherDetail />
            </Grid>
         </Grid>
         <Grid container spacing={2}>
            <ForecastCard />
         </Grid>
      </>
   )
}

export default CityTap
