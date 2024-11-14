import Menu from '../components/Menu'
import SunriseSunset from '../components/planetarium/SunriseSunset'
import Constellation from '../components/planetarium/Constellation'
import Footer from '../components/Footer'
import Grid from '@mui/material/Grid2'
function Planetarium() {
   return (
      <>
         <Menu />
         <main>
            <Grid container spacing={2}>
               <Grid size={8}>
                  <SunriseSunset />
               </Grid>
               <Grid size={4}>
                  <SunriseSunset />
               </Grid>
               <Grid ize={4}>
                  <Constellation />
               </Grid>
            </Grid>
         </main>
         <Footer />
      </>
   )
}

export default Planetarium
