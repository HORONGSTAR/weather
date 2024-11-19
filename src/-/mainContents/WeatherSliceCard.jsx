import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLocalWeather } from '../../features/localSlice'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { weatherKo } from '../../database/weatherKo'

function WeatherSectionCard({ lat, lon, name }) {
   const dispatch = useDispatch()
   const { weathers, loading, error } = useSelector((state) => state.local)
   const key = lon + '.' + lat

   useEffect(() => {
      dispatch(fetchLocalWeather({ type: 'weather', lat, lon }))
   }, [dispatch, lat, lon])

   if (loading) return <p>Loading...</p>
   if (error) return <p>Error: {error}</p>
   return (
      <>
         {weathers[key] && (
            <Card variant="outlined" sx={{ maxWidth: 500, height: 300, borderRadius: 2 }}>
               <Box sx={{ height: 150, backgroundColor: 'skyblue', display: 'flex', alignItems: 'center' }}>
                  <CardMedia component="img" image={weathers[key].weather[0] ? 'https://openweathermap.org/img/wn/' + weathers[key].weather[0].icon + '@4x.png' : './images/logo.png'} alt={weatherKo[weathers[key].weather[0].id]} />
               </Box>

               <CardContent>
                  <Typography variant="subtitle2">{name}</Typography>
                  <Typography variant="h6">{weatherKo[weathers[key].weather[0].id]}</Typography>
                  <Typography variant="body2">현재 온도 {weathers[key].main.temp.toFixed(1)}°C</Typography>
                  <Typography variant="body2">체감 온도 {weathers[key].main.feels_like.toFixed(1)}°C</Typography>
               </CardContent>
            </Card>
         )}
      </>
   )
}

export default WeatherSectionCard
