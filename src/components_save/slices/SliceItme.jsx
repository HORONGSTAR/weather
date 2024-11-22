import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLocalWeather } from '../../features/localSlice'
import { Box, Card, CardContent, CardMedia, Typography, LinearProgress } from '@mui/material'
import { weatherKo, iconSrc, todays } from '../../database/InternaLdata'
import { sliceItmeSx } from '../../style/StyledComponent'

function SliceItme({ lat, lon, name }) {
   const dispatch = useDispatch()
   const { weathers, loading, error } = useSelector((state) => state.local)

   useEffect(() => {
      dispatch(fetchLocalWeather({ lat, lon }))
   }, [dispatch, lat, lon])

   if (loading)
      return (
         <Box sx={sliceItmeSx[2]}>
            <LinearProgress sx={{ opacity: '40%' }} />
         </Box>
      )
   if (error) return <p>문제가 생겼어요! : {error}</p>

   const key = lon + '.' + lat

   return (
      <>
         {weathers[key] && (
            <Card variant="outlined" sx={sliceItmeSx[0]}>
               <div className="gradation">
                  <Box sx={sliceItmeSx[1].con}>
                     <CardMedia
                        component="img"
                        image={
                           weathers[key].weather[0]
                              ? iconSrc[0] +
                                (17 > todays.hour && todays.hour > 5
                                   ? weathers[key].weather[0].icon.replace('n', 'd')
                                   : weathers[key].weather[0].icon.replace('d', 'n')) +
                                iconSrc[1]
                              : iconSrc[3]
                        }
                        alt={weatherKo[weathers[key].weather[0].id]}
                     />
                  </Box>
               </div>
               <CardContent>
                  <Typography variant="subtitle2">{name}</Typography>
                  <Typography variant="h6">{weatherKo[weathers[key].weather[0].id]}</Typography>
                  <Typography variant="body2">
                     현재 온도 {weathers[key].main.temp.toFixed(1)}°C
                  </Typography>
                  <Typography variant="body2">
                     체감 온도 {weathers[key].main.feels_like.toFixed(1)}°C
                  </Typography>
               </CardContent>
            </Card>
         )}
      </>
   )
}

export default SliceItme
