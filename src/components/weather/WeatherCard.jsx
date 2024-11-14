import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import fetchWeather from '../../features/weatherSlice'

function WeatherCard() {
   const dispatch = useDispatch()
   const { weather, loading, error } = useSelector((state) => state.weather)

   useEffect(() => {
      dispatch(fetchWeather())
   }, [dispatch])

   if (loading) return <p>Loading...</p>
   if (error) return <p>Error: {error}</p>

   return <></>
}

export default WeatherCard
