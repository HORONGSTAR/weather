import React, { useState, useEffect, useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeathers } from '../../features/weathersSlice'

function WeatherCard({ locals }) {
   const dispatch = useDispatch()
   const { weathers, weathersLoading, weathersError } = useSelector((state) => state.weathers)

   useEffect(() => {
      if (locals) {
         dispatch(fetchWeathers({ type: 'weather', lat: locals[0], lon: locals[1] }))
         console.log(weathers.main)
      }
   }, [dispatch])

   return <div></div>
}

export default WeatherCard
