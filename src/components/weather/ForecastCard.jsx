import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSearchForecast } from '../../features/searchSlice'
import { Grid2, List, ListItem, Divider } from '@mui/material'
import { weatherDescKo } from '../../database/InternaLdata'

function ForecastCard({ lon, lat }) {
   const dispatch = useDispatch()
   const { forecasts, dataKeys, loading, error } = useSelector((state) => state.search)

   useEffect(() => {
      if (lon && lat) {
         dispatch(fetchSearchForecast({ type: 'forecast', lat: lat, lon: lon }))
      }
   }, [dispatch, lon, lat])

   if (loading) return <p>Loading...</p>
   if (error) return <p>Error: {error}</p>

   return (
      <Grid2>
         {forecasts &&
            forecasts.map((li, idx) => (
               <>
                  <List>
                     <ListItem>
                        {li['dt_txt']}
                        {weatherDescKo[li.weather[0].id]}/온도 {li.main.temp.toFixed(1)}°C
                     </ListItem>
                  </List>
               </>
            ))}
      </Grid2>
   )
}

export default ForecastCard
