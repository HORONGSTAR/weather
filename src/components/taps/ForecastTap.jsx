import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSearchForecast } from '../../features/searchSlice'
import ForecastTable from '../table/ForecastTable'
import { Box, Tab } from '@mui/material'
import { TabContext, TabList } from '@mui/lab'

function ForecastTap() {
   const dispatch = useDispatch()
   const { lon, lat } = useSelector((state) => state.coord)
   const { forecasts, loading, error } = useSelector((state) => state.search)
   const [itemList, setItemList] = useState(null)
   const [value, setValue] = useState(null)
   const isFirstLoad = useRef(true)

   useEffect(() => {
      if (lon && lat) {
         dispatch(fetchSearchForecast({ type: 'forecast', lat: lat, lon: lon }))
      }
   }, [dispatch, lon, lat])

   useEffect(() => {
      if (!forecasts) return
      const keys = forecasts.map((forecast) => forecast.dt_txt.split(' '))
      const itemkey = keys
         .filter((key, idx) => idx === 0 || key[0] !== keys[idx - 1][0])
         .map((key) => key[0])

      const itemList = {}
      for (let i in itemkey) {
         const items = []
         for (let j in keys) {
            if (itemkey[i] === keys[j][0])
               items.push({ item: forecasts[j], hour: Number(keys[j][1].split(':')[0]) })
            itemList[itemkey[i]] = items
         }
      }
      setItemList({ ...itemList, keys: itemkey })
   }, [forecasts])

   useEffect(() => {
      if (itemList && isFirstLoad.current) {
         setValue(itemList.keys[0])
         isFirstLoad.current = false
         return
      }
   }, [itemList, setValue])

   if (loading) return <p>Loading...</p>
   if (error) return <p>Error: {error}</p>

   const handleChange = (event, newValue) => {
      setValue(newValue)
   }

   return (
      <Box sx={{ width: '100%', typography: 'body1' }}>
         <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
               <TabList onChange={handleChange} aria-label="lab API tabs example">
                  {itemList &&
                     itemList.keys.map((key) => (
                        <Tab
                           label={`${key.split('-')[0]}년 ${key.split('-')[1]}월 ${
                              key.split('-')[2]
                           }일`}
                           value={key}
                           key={key}
                        />
                     ))}
               </TabList>
            </Box>
            <ForecastTable itemList={itemList} />
         </TabContext>
      </Box>
   )
}

export default ForecastTap
