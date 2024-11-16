import Menu from '../components/Menu'
import TodayBanner from '../components/TodayBanner'
import WeatherSection from '../components/mainContents/WeatherSection'
import AirPollutionCard from '../components/airPollution/AirPollutionCard'
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
                  <WeatherSection />
               </Grid2>
               <Grid2 size={6}>
                  <AirPollutionCard />
               </Grid2>
            </Grid2>
         </main>
         <Footer />
      </>
   )
}

export default Home
