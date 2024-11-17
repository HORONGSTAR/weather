import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSearchWeather } from '../../features/searchSlice'
import { Grid2, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { weatherDescKo } from '../../database/InternaLdata'

function WeatherCard({ lon, lat }) {
   const dispatch = useDispatch()
   const { weathers, loading, error } = useSelector((state) => state.search)

   useEffect(() => {
      if (lon && lat) {
         dispatch(fetchSearchWeather({ type: 'weather', lat: lat, lon: lon }))
      }
   }, [dispatch, lon, lat])
   if (loading) return <p>Loading...</p>
   if (error) return <p>Error: {error}</p>
   return (
      <Grid2 container spacing={2}>
         {weathers && (
            <Card sx={{ maxWidth: 600 }}>
               <CardMedia
                  component="img"
                  height="200"
                  image={`https://openweathermap.org/img/wn/${
                     weathers.weather[0]
                        ? weathers.weather[0].icon
                        : Date.getHours() > 5 && Date.getHours() < 18
                        ? '01d'
                        : '01n'
                  }@4x.png`}
                  alt={weatherDescKo[weathers.weather[0].id]}
               />
               <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                     {weatherDescKo[weathers.weather[0].id]}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                     현재 온도 {weathers.main.temp.toFixed(1)}°C
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                     체감 온도 {weathers.main.feels_like.toFixed(1)}°C
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                     최고 온도 {weathers.main.temp_min.toFixed(1)}°C
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                     최저 온도 {weathers.main.temp_max.toFixed(1)}°C
                  </Typography>
               </CardContent>
            </Card>
         )}
      </Grid2>
   )
}

export default WeatherCard
