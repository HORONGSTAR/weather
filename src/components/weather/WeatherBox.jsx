import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSearchWeather } from '../../features/searchSlice'
import { Box, Typography, Avatar, Stack } from '@mui/material'
import { weatherKo, iconSrc, todays } from '../../database/InternaLdata'
import { skycolors, avatarSx, WindDeg, Text, UnitSpan } from '../../style/StyledComponent'
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

   if (loading) return <p>Loading...</p>
   if (error) return <p>Error: {error}</p>
   return (
      <>
         {search && (
            <Stack direction="row" spacing={3} padding="20px 0">
               <Avatar
                  sx={skycolors(todays.hour).concat(avatarSx('150px'))}
                  src={
                     search.weather[0]
                        ? iconSrc[0] +
                          (18 >= todays.hour && todays.hour >= 6
                             ? search.weather[0].icon.replace('n', 'd')
                             : search.weather[0].icon.replace('d', 'n')) +
                          iconSrc[1]
                        : iconSrc[3]
                  }
                  alt={weatherKo[search.weather[0].id]}
               />
               <Box>
                  <Typography gutterBottom variant="h5">
                     {weatherKo[search.weather[0].id]}
                  </Typography>
                  <Stack direction="row" spacing={3}>
                     <Box>
                        <Text>
                           현재 온도 {search.main.temp.toFixed(1)}
                           <UnitSpan>°C</UnitSpan>
                        </Text>
                        <Text>
                           체감 온도 {search.main.feels_like.toFixed(1)}
                           <UnitSpan>°C</UnitSpan>
                        </Text>
                     </Box>

                     <Box>
                        <Text>
                           최고 {search.main.temp_min.toFixed(1)} <UnitSpan>°C</UnitSpan>
                        </Text>
                        <Text>
                           최저 {search.main.temp_max.toFixed(1)} <UnitSpan>°C</UnitSpan>
                        </Text>
                     </Box>

                     <Box>
                        <Text>
                           습도 {search.main.humidity} <UnitSpan>%</UnitSpan>
                        </Text>
                        <Text>
                           구름양 {search.clouds.all} <UnitSpan>%</UnitSpan>
                        </Text>
                     </Box>
                     <Box>
                        <Text>
                           풍속 {search.wind.speed.toFixed(1)} <UnitSpan>m/s</UnitSpan>
                        </Text>
                        <Stack direction="row" spacing={1}>
                           <Text>풍향</Text>
                           <WindDeg $deg={search.wind.deg}>
                              <FaArrowUpLong />
                           </WindDeg>
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
