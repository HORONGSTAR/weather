import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLocalWeather } from '../features/localSlice'
import { fetchLocalAir } from '../features/localSlice'
import { weatherKo } from '../database/InternaLdata'
import WeatherBox from '../components/WeatherBox'
import AirBox from '../components/WeatherBox'

function LocalPage() {
   const dispatch = useDispatch()
   const { loading, weather, airdatas, error } = useSelector((state) => state.local)
   const key = `${lon}.${lat}`

   useEffect(() => {
      dispatch(fetchLocalAir({ type: 'air_pollution', lon, lat }))
   }, [dispatch, lon, lat])

   return (
      <>
         {localDatas.map((localData) => (
            <>
               <WeatherBox />
            </>
         ))}
      </>
   )
}

export default LocalPage
