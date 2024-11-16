import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLocals } from '../../features/localsSlice'
import WeatherCard from './WeatherCard'
import ForecastCard from './ForecastCard'
import WeatherDetail from './WeatherDetail'
import { Select, Grid2, InputLabel, MenuItem, FormControl } from '@mui/material'
import { cites, address } from '../../features/InternaLdata'

function CityTap() {
   const dispatch = useDispatch()
   const { locals, localsLoading, localsError } = useSelector((state) => state.locals)
   const [cityValue, setcityValue] = useState('')
   const [itemValue, setitemValue] = useState(null)

   const handleChangeCity = (e) => setcityValue(e.target.value)
   const handleChangeItem = (e) => setitemValue(e.target.value)

   useEffect(() => {
      if (itemValue) dispatch(fetchLocals({ query: itemValue }))
   }, [dispatch, itemValue])

   if (localsLoading) return <p>Loading...</p>
   if (localsError) return <p>Error: {localsError}</p>
   return (
      <>
         <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-simple-select-helper-label">어느 지역의 날씨를 볼까요?</InputLabel>
            <Select
               labelId="demo-simple-select-helper-label"
               value={cityValue}
               onChange={handleChangeCity}
               label="어느 지역의 날씨를 볼까요?"
            >
               {cites.map((city) => (
                  <MenuItem key={city.value} value={city.value}>
                     {city.name}
                  </MenuItem>
               ))}
            </Select>
         </FormControl>
         {cityValue && (
            <FormControl sx={{ m: 1, width: 300 }}>
               <InputLabel id="demo-simple-select-helper-label">우리 동네를 골라보아요!</InputLabel>
               <Select
                  labelId="demo-simple-select-helper-label"
                  value={itemValue}
                  onChange={handleChangeItem}
                  label="우리 동네를 골라보아요!"
               >
                  {address[cityValue].map((item) => (
                     <MenuItem key={cites.name + item} value={item}>
                        {item}
                     </MenuItem>
                  ))}
               </Select>
            </FormControl>
         )}
         <Grid2 container spacing={2}>
            <Grid2 size={6}>{itemValue && <WeatherCard locals={locals} />}</Grid2>
            <Grid2 ize={6}>
               <WeatherDetail />
            </Grid2>
         </Grid2>
         <Grid2 container spacing={2}>
            <ForecastCard />
         </Grid2>
      </>
   )
}

export default CityTap
