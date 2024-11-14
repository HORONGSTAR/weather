import Menu from '../components/Menu'
import AirPollutionCard from '../components/airPollution/AirPollutionCard'
import AirPollutionDetail from '../components/airPollution/AirPollutionDetail'
import AirPollutionMap from '../components/airPollution/AirPollutionMap'
import Footer from '../components/Footer'
import Grid from '@mui/material/Grid2'

function AirPollution() {
   return (
      <>
         <Menu />
         <main>
            <Grid container spacing={2}>
               <Grid size={8}>
                  <AirPollutionMap />
               </Grid>
               <Grid size={4}>
                  <AirPollutionCard />
               </Grid>
               <Grid size={4}>
                  <AirPollutionDetail />
               </Grid>
            </Grid>
         </main>
         <Footer />
      </>
   )
}

export default AirPollution
