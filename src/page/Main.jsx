import React, { useEffect } from 'react'
import { fetchLocalWeather, fetchLocalAir } from '../features/localSlice'
import { add } from '../features/itemSlice'
import { useDispatch } from 'react-redux'
import { localDatas } from '../database/InternaLdata'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Home from './Home'
import Forecast from './Forecast'
import AirPollution from './AirPollution'

function Main({ page }) {
   const dispatch = useDispatch()
   useEffect(() => {
      const itemList = []
      for (let data of localDatas) {
         dispatch(fetchLocalWeather({ type: 'weather', lat: data.lat, lon: data.lon }))
         dispatch(fetchLocalAir({ type: 'air_pollution', lat: data.lat, lon: data.lon }))
         itemList.push({ key: data.lon + '/' + data.lat, name: data.name })
      }
      dispatch(add(itemList))
   }, [dispatch])

   return (
      <>
         <Menu />
         <div className="wrap">
            {page === 'home' && <Home />}
            {page === 'forecast' && <Forecast />}
            {page === 'airPollution' && <AirPollution />}
         </div>
         <Footer />
      </>
   )
}

export default Main
