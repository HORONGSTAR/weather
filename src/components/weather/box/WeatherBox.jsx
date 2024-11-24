import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSearchWeather } from '../../../features/searchSlice'
import { Box, Avatar, Stack } from '@mui/material'
import { weatherKo } from '../../../database/InternaLdata'
import { skycolors, avatarSx, WindDeg, getIcon } from '../../../style/StyledComponent'
import { FaArrowUpLong } from 'react-icons/fa6'

function WeatherBox() {
   const dispatch = useDispatch()
   const { lon, lat } = useSelector((state) => state.coord)
   const { search, loading, error } = useSelector((state) => state.search)

   useEffect(() => {
      if (lon && lat) {
         dispatch(fetchSearchWeather({ type: 'weather', lat: lat, lon: lon }))
      }
   }, [dispatch, lon, lat])

   if (loading) return <p> 정보를 찾아오는 중...</p>
   if (error) return <p>문제가 생겼어요! : {error}</p>

   return (
      <>
         {search && (
            <Stack direction="row" spacing={3} padding="20px 0">
               <Avatar
                  sx={avatarSx('150px').concat(skycolors)}
                  src={getIcon(search.weather[0].icon)}
                  alt={weatherKo[search.weather[0].id]}
               />
               <Box>
                  <h4>{weatherKo[search.weather[0].id]}</h4>
                  <Stack direction="row" spacing={3}>
                     <Box>
                        <p>현재 온도 {search.main.temp.toFixed(1)}°C</p>
                        <p>체감 온도 {search.main.feels_like.toFixed(1)}°C</p>
                     </Box>

                     <Box>
                        <p>최고 {search.main.temp_min.toFixed(1)} °C</p>
                        <p>최저 {search.main.temp_max.toFixed(1)} °C</p>
                     </Box>

                     <Box>
                        <p>
                           습도 {search.main.humidity} %<p></p>
                        </p>
                        <p>구름양 {search.clouds.all} %</p>
                     </Box>
                     <Box>
                        <p>풍속 {search.wind.speed.toFixed(1)} m/s</p>

                        <Stack direction="row" spacing={1}>
                           <p>풍향</p>
                           <p>
                              <WindDeg $deg={search.wind.deg}>
                                 <FaArrowUpLong />
                              </WindDeg>
                           </p>
                        </Stack>
                     </Box>
                  </Stack>
               </Box>
            </Stack>
         )}
      </>
   )
}

export default WeatherBox
