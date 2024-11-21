import Menu from '../components/Menu'
import Footer from '../components/Footer'
import CitySelect from '../components/details/CitySelect'
import ForecastTap from '../components/taps/ForecastTap'
import CardBox from '../components/details/CardBox'
import { Grid2 } from '@mui/material'

function Forecast() {
   return (
      <>
         <Menu />
         <Grid2 container spacing={5}>
            <Grid2 size={{ sm: 12, md: 4 }}>
               <CitySelect page={'forecast'} />
            </Grid2>
            <Grid2 size={{ sm: 12, md: 8 }}>
               <CardBox />
            </Grid2>
         </Grid2>
         <ForecastTap page={'forecast'} />
         <Footer />
      </>
   )
}

export default Forecast
