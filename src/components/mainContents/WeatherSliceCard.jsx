import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLocalWeather } from '../../features/localSlice'
import { Grid2, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { weatherDescKo } from '../../database/InternaLdata'

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
            <Card variant="outlined" sx={{ maxWidth: 600 }}>
               <CardMedia component="img" image={weathers[key].weather[0] ? `https://openweathermap.org/img/wn/${weathers[key].weather[0].icon}@4x.png` : './images/logo.png'} alt={weatherDescKo[weathers[key].weather[0].id]} />
               <CardContent>
                  <Typography variant="subtitle2">{name}</Typography>
                  <Typography variant="h6">{weatherDescKo[weathers[key].weather[0].id]}</Typography>
                  <Typography variant="body2">현재 온도 {weathers[key].main.temp.toFixed(1)}°C</Typography>
                  <Typography variant="body2">체감 온도 {weathers[key].main.feels_like.toFixed(1)}°C</Typography>
               </CardContent>
            </Card>
         )}
      </>
   )
}

export default WeatherSectionCard
