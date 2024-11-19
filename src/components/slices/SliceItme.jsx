import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLocalWeather } from '../../features/localSlice'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { weatherKo, iconSrc } from '../../database/InternaLdata'
import { sliceItmeSx } from '../../style/StyledComponent'

function SliceItme({ lat, lon, name }) {
   const dispatch = useDispatch()
   const { weathers, loading, error } = useSelector((state) => state.local)

   useEffect(() => {
      dispatch(fetchLocalWeather({ type: 'weather', lat, lon }))
   }, [dispatch, lat, lon])

   if (loading) return <p>정보를 찾아오는 중...</p>
   if (error) return <p>문제가 생겼어요! {error}</p>

   const key = lon + '.' + lat

   return (
      <>
         {weathers[key] && (
            <Card variant="outlined" sx={sliceItmeSx[0]}>
               <Box sx={sliceItmeSx[1]}>
                  <CardMedia
                     component="img"
                     image={
                        weathers[key].weather[0]
                           ? iconSrc[0] + weathers[key].weather[0].icon + iconSrc[1]
                           : iconSrc[3]
                     }
                     alt={weatherKo[weathers[key].weather[0].id]}
                  />
               </Box>
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
