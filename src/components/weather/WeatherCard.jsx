import React, { useEffect, useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeathers } from '../../features/weathersSlice'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

function WeatherCard({ locals }) {
   const dispatch = useDispatch()
   const { weathers, weathersLoading, weathersError } = useSelector((state) => state.weathers)

   useEffect(() => {
      if (locals) {
         dispatch(fetchWeathers({ type: 'weather', lat: locals[0], lon: locals[1] }))
      }
   }, [dispatch, locals])
   if (weathersLoading) return <p>Loading...</p>
   if (weathersError) return <p>Error: {weathersError}</p>
   return (
      <>
         {weathers && (
            <Card sx={{ maxWidth: 200 }}>
               <CardMedia component="img" height="200" image={`https://openweathermap.org/img/wn/${weathers.weather[0] ? weathers.weather[0].icon : Date.getHours() > 5 && Date.getHours() < 18 ? '01d' : '01n'}@4x.png`} alt="green iguana" />
               <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                     {weathers.weather[0].description}
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
      </>
   )
}

export default WeatherCard
