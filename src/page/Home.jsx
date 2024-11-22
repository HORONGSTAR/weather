import Menu from '../components/Menu'
import Footer from '../components/Footer'
import SliceBox from '../components/weather/slice/SliceBox'
import TableBox from '../components/air/table/TableBox'
import Banner from '../components/Banner'
import MapBox from '../components/air/MapBox'
import { Grid2, Stack } from '@mui/material'
import { PiStarFourFill } from 'react-icons/pi'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchLocalWeather, fetchLocalAir } from '../features/localSlice'
import { localDatas } from '../database/InternaLdata'
import CitySelect from '../components/weather/CitySelect'

function Home({ page }) {
   const isPage = useRef('')
   const isReset = useRef(true)

   const dispatch = useDispatch()

   const [coords, setCoord] = useState(null)

   useEffect(() => {
      const coordList = []
      for (let data of localDatas) {
         dispatch(fetchLocalWeather({ type: 'weather', lat: data.lat, lon: data.lon }))
         dispatch(fetchLocalAir({ type: 'air_pollution', lat: data.lat, lon: data.lon }))
         coordList.push([data.lon + '.' + data.lat, data.name, data.lon, data.lat])
         console.log(data.name)
         setCoord(coordList)
      }
   }, [dispatch])

   useEffect(() => {
      if (isPage.current !== page) {
         isReset.current = false
         isPage.current = page
      }
   }, [dispatch, page])

   return (
      <>
         <Menu />
         {page === 'home' && (
            <>
               <Banner />
               <Grid2 container spacing={2}>
                  <Grid2 size={{ xs: 12, sm: 6, md: 8 }}>
                     <h4>
                        <PiStarFourFill style={{ fontSize: '12px', marginRight: '5px' }} />
                        실시간 일기예보
                     </h4>
                     <SliceBox coords={coords} />
                  </Grid2>
                  <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
                     <h4>
                        <PiStarFourFill style={{ fontSize: '12px', marginRight: '5px' }} />
                        실시간 미세먼지
                     </h4>
                     <TableBox coords={coords} />
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
            </>
         )}

         {page === 'airPollution' && (
            <>
               <h4>
                  <PiStarFourFill style={{ fontSize: '12px' }} />
                  &nbsp;현재 미세먼지 농도는 어떨까요?
               </h4>
               <Grid2 spacing={2} container>
                  <Grid2 size={{ xs: 12, sm: 6, md: 5 }}>
                     <MapBox coords={coords} />
                  </Grid2>
                  <Grid2 size={{ xs: 12, sm: 6, md: 7 }}>
                     <TableBox coords={coords} detail={true} height={'100%'} />
                  </Grid2>
               </Grid2>
            </>
         )}

         <Footer />
      </>
   )
}

export default Home
