import React, { useEffect, useState, useRef, useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSearchForecast } from '../../../features/searchSlice'
import ForecastTable from '../table/ForecastTable'
import { Box, Tab } from '@mui/material'
import { TabContext, TabList } from '@mui/lab'
import { todays } from '../../../database/InternaLdata'

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

   useMemo(() => {
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
         setValue(itemList.keys[1])
         isFirstLoad.current = false
         return
      }
   }, [itemList, setValue])

   const handleChange = useCallback(
      (event, newValue) => {
         setValue(newValue)
      },
      [setValue]
   )

   if (loading) return <p> 정보를 찾아오는 중...</p>
   if (error) return <p>문제가 생겼어요! : {error}</p>

   return (
      <Box sx={{ width: '100%', typography: 'body1' }}>
         <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
               <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  centered
                  scrollButtons
                  allowScrollButtonsMobile
                  variant="scrollable"
               >
                  {itemList &&
                     itemList.keys.map(
                        (key, idx) =>
                           idx !== 0 && (
                              <Tab
                                 label={
                                    todays.week[new Date(key).getDay()] +
                                    (idx === 1 ? '요일(내일)' : '요일')
                                 }
                                 value={key}
                                 key={key}
                              />
                           )
                     )}
               </TabList>
            </Box>
            <ForecastTable itemList={itemList} />
         </TabContext>
      </Box>
   )
}

export default ForecastTap
