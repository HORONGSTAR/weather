import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSearchForecast } from '../../features/searchSlice'
import { Grid2, List, ListItem, Divider } from '@mui/material'
import { weatherKo } from '../../database/weatherKo'

function ForecastCard({ lon, lat }) {
   const dispatch = useDispatch()
   const { forecasts, loading, error } = useSelector((state) => state.search)
   const [itemList, setItemList] = useState(null)

   useEffect(() => {
      if (lon && lat) {
         dispatch(fetchSearchForecast({ type: 'forecast', lat: lat, lon: lon }))
      }
   }, [dispatch, lon, lat])

   useEffect(() => {
      if (!forecasts) return
      const keys = forecasts.map((forecast) => forecast.dt_txt.split(' '))
      const itemkey = keys.filter((key, idx) => idx === 0 || key[0] !== keys[idx - 1][0]).map((key) => key[0])

      const itemList = {}
      for (let i in itemkey) {
         const items = []
         for (let j in keys) {
            if (itemkey[i] === keys[j][0]) items.push({ item: forecasts[j], hour: Number(keys[j][1].split(':')[0]) })
            itemList[itemkey[i]] = items
         }
      }
      setItemList({ ...itemList, keys: itemkey })
      console.log(itemList)
   }, [forecasts])

   if (loading) return <p>Loading...</p>
   if (error) return <p>Error: {error}</p>

   return (
      <Grid2>
         {itemList &&
            itemList.keys.map((key) => (
               <List key={key}>
                  <ListItem>
                     {key.split('-')[0]}년 {key.split('-')[1]}월 {key.split('-')[2]}일
                  </ListItem>
                  {itemList[key].map((items) => (
                     <>
                        <ListItem>
                           {items.hour}시 {weatherKo[items.item.weather[0].id]} {items.item.main.temp.toFixed(1)}°C
                        </ListItem>
                        <Divider />
                     </>
                  ))}
               </List>
            ))}
      </Grid2>
   )
}

export default ForecastCard
