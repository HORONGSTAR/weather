import Menu from '../components/Menu'
import TodayBanner from '../components/TodayBanner'
import WeatherCard from '../components/weather/WeatherCard'
import AirPollutionCard from '../components/airPollution/AirPollutionCard'
import Footer from '../components/Footer'
import Grid from '@mui/material/Grid2'

function Home() {
   return (
      <>
         <Menu />
         <main>
            <Grid container spacing={2}>
               <TodayBanner />
            </Grid>
            <Grid container spacing={2}>
               <Grid size={6}>
                  <WeatherCard />
               </Grid>
               <Grid size={6}>
                  <AirPollutionCard />
               </Grid>
            </Grid>
         </main>
         <Footer />
      </>
   )
}

export default Home
