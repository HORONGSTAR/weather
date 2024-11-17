import Menu from '../components/Menu'
import AirPollutionBox from '../components/airPollution/AirPollutionBox'
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
                  <AirPollutionBox />
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
