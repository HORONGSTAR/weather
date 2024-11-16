import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCityWeathers } from '../../features/citesSlice'
import { Grid2, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { weatherDescKo } from '../../features/InternaLdata'

function WeatherSectionCard({ locals, name }) {
   const dispatch = useDispatch()
   const { cites, citesLoading, citessError } = useSelector((state) => state.cites)

   useEffect(() => {
      dispatch(fetchCityWeathers({ q: locals }))
   }, [dispatch, locals])

   if (citesLoading) return <p>Loading...</p>
   if (citessError) return <p>Error: {citessError}</p>
   return (
      <Grid2 container spacing={2}>
         {cites[locals] && (
            <Card sx={{ maxWidth: 600 }}>
               <CardMedia
                  component="img"
                  height="200"
                  image={`https://openweathermap.org/img/wn/${
                     cites[locals].weather[0]
                        ? cites[locals].weather[0].icon
                        : Date.getHours() > 5 && Date.getHours() < 18
                        ? '01d'
                        : '01n'
                  }@4x.png`}
                  alt={weatherDescKo[cites[locals].weather[0].id]}
               />
               <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                     {name}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                     {weatherDescKo[cites[locals].weather[0].id]}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                     현재 온도 {cites[locals].main.temp.toFixed(1)}°C
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                     체감 온도 {cites[locals].main.feels_like.toFixed(1)}°C
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                     최고 온도 {cites[locals].main.temp_min.toFixed(1)}°C
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                     최저 온도 {cites[locals].main.temp_max.toFixed(1)}°C
                  </Typography>
               </CardContent>
            </Card>
         )}
      </Grid2>
   )
}

export default WeatherSectionCard
