import Menu from '../components/Menu'
import Footer from '../components/Footer'
import SliceBox from '../components/slices/SliceBox'
import AirTable from '../components/table/AirTable'
import Banner from '../components/Banner'
import MapBox from '../components/details/MapBox'
import CitySelect from '../components/details/CitySelect'
import ForecastTap from '../components/taps/ForecastTap'
import CardBox from '../components/details/CardBox'
import { Grid2, Stack } from '@mui/material'
import { PiStarFourFill } from 'react-icons/pi'
import React, { useEffect, useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { reset } from '../features/searchSlice'
import { fetchSearchWeather } from '../features/searchSlice'
import { localDatas } from '../database/InternaLdata'

function Home({ page }) {
   const isPage = useRef('')
   const dispatch = useDispatch()

   useEffect(() => {
      if (isPage.current !== page) {
         for (let localData of localDatas) {
            dispatch(fetchSearchWeather({ lat: localData.lat, lon: localData.lon }))
         }
         isPage.current = page
      }
   }, [])

   return (
      <>
         <Menu />
         {page === 'home' && (
            <>
               <Banner />
               <Grid2 container spacing={2}>
                  <Grid2 size={{ xs: 12, sm: 6, md: 8 }}>
                     <h4>
                        <PiStarFourFill style={{ fontSize: '12px' }} />
                        &nbsp;실시간 일기예보
                     </h4>
                     <SliceBox />
                  </Grid2>
                  <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
                     <h4>
                        <PiStarFourFill style={{ fontSize: '12px' }} />
                        &nbsp;실시간 미세먼지
                     </h4>
                     <AirTable />
                  </Grid2>
               </Grid2>
            </>
         )}

         {page === 'forecast' && (
            <>
               <h4>
                  <PiStarFourFill style={{ fontSize: '12px' }} />
                  &nbsp;지역 별로 날씨를 찾아볼 수 있어요!
               </h4>
               <Stack direction="row" spacing={2}>
                  <CitySelect />
               </Stack>
               <CardBox value={false} />
               <ForecastTap />
            </>
         )}
         {page === 'airPollution' && (
            <>
               <h4>
                  <PiStarFourFill style={{ fontSize: '12px' }} />
                  &nbsp;현재 미세먼지 농도는 어떨까요?
               </h4>
               <Grid2 spacing={2} container>
                  <Grid2 size={{ xs: 12, sm: 6, md: 5 }}>{/* <MapBox /> */}</Grid2>
                  <Grid2 size={{ xs: 12, sm: 6, md: 7 }}>
                     <AirTable height={'100%'} detail={true} />
                  </Grid2>
               </Grid2>
            </>
         )}
         <Footer />
      </>
   )
}

export default Home
