import Menu from '../components/Menu'
import TodayBanner from '../components/mainContents/TodayBanner'
import WeatherSlice from '../components/mainContents/WeatherSlice'
import AirPollutionBox from '../components/airPollution/AirPollutionBox'
import Footer from '../components/Footer'
import { Grid2 } from '@mui/material'

function Home() {
   return (
      <>
         <Menu />
         <TodayBanner />
         <WeatherSlice />
         <AirPollutionBox output={false} />
         <Footer />
      </>
   )
}

export default Home
