import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSearchWeather } from '../../features/searchSlice'
import { Grid2, Container, Typography, Card, CardContent, CardMedia } from '@mui/material'
import { weatherKo, iconSrc, todays } from '../../database/InternaLdata'
import { skycolors, Main } from '../../style/StyledComponent'

function CardBox() {
   const dispatch = useDispatch()
   const { lon, lat } = useSelector((state) => state.coord)
   const { weathers, loading, error } = useSelector((state) => state.search)

   useEffect(() => {
      if (lon && lat) {
         dispatch(fetchSearchWeather({ type: 'weather', lat: lat, lon: lon }))
      }
   }, [dispatch, lon, lat])
   if (loading) return <p>Loading...</p>
   if (error) return <p>Error: {error}</p>
   return (
      <>
         {weathers && (
            <Container maxWidth="sm">
               <Card variant="outlined">
                  <Grid2 container spacing={2} padding="20px">
                     <Grid2 size={{ xs: 6, sm: 3 }}>
                        <CardMedia
                           component="img"
                           sx={skycolors(todays.hour).concat({ maxWidth: '200px' })}
                           src={
                              weathers.weather[0]
                                 ? iconSrc[0] +
                                   (18 >= todays.hour && todays.hour >= 6
                                      ? weathers.weather[0].icon.replace('n', 'd')
                                      : weathers.weather[0].icon.replace('d', 'n')) +
                                   iconSrc[1]
                                 : iconSrc[3]
                           }
                           alt={weatherKo[weathers.weather[0].id]}
                        />
                     </Grid2>
                     <Grid2 container size={{ xs: 6, sm: 9 }}>
                        <Grid2 size={12}>
                           <Typography gutterBottom variant="h5">
                              {weatherKo[weathers.weather[0].id]}
                           </Typography>
                        </Grid2>
                        <Grid2 size={{ xs: 12, sm: 4 }}>
                           <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                              현재 온도 {weathers.main.temp.toFixed(1)}°C
                           </Typography>
                           <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                              체감 온도 {weathers.main.feels_like.toFixed(1)}°C
                           </Typography>
                        </Grid2>
                        <Grid2 size={{ xs: 12, sm: 4 }}>
                           <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                              최고 온도 {weathers.main.temp_min.toFixed(1)}°C
                           </Typography>
                           <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                              최저 온도 {weathers.main.temp_max.toFixed(1)}°C
                           </Typography>
                        </Grid2>
                        <Grid2 size={{ xs: 12, sm: 4 }}>
                           <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                              습도 {weathers.main.temp_min.toFixed(1)}°C
                           </Typography>
                           <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                              풍속/풍향 {weathers.main.temp_max.toFixed(1)}°C
                           </Typography>
                        </Grid2>
                     </Grid2>
                  </Grid2>
               </Card>
            </Container>
         )}
      </>
   )
}

export default CardBox
