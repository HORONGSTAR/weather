import Menu from '../components/Menu'
import TodayBanner from '../components/TodayBanner'
import WeatherSlice from '../components/mainContents/WeatherSlice'
import AirPollutionBox from '../components/airPollution/AirPollutionBox'
import Footer from '../components/Footer'
import { Grid2 } from '@mui/material'

function Home() {
   return (
      <>
         <Menu />
         <main>
            <Grid2 container spacing={2}>
               <TodayBanner />
            </Grid2>
            <Grid2 container spacing={2}>
               <Grid2 size={6}>
                  <WeatherSlice />
               </Grid2>
               <Grid2 size={6}>
                  <AirPollutionBox />
               </Grid2>
            </Grid2>
         </main>
         <Footer />
      </>
   )
}

export default Home
