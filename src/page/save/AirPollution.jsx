import Menu from '../components/Menu'
import Footer from '../components/Footer'
import MapBox from '../components/details/MapBox'
import AirTable from '../components/table/AirTable'
import { Grid2 } from '@mui/material'
import { PiStarFourFill } from 'react-icons/pi'

function AirPollution() {
   return (
      <>
         <Menu />
         <h4>
            <PiStarFourFill style={{ fontSize: '12px' }} />
            &nbsp;현재 미세먼지 농도는 어떨까요?
         </h4>
         <Grid2 spacing={2} container>
            <Grid2 size={{ xs: 12, sm: 6, md: 5 }}>
               <MapBox />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6, md: 7 }}>
               <AirTable height={'100%'} detail={true} />
            </Grid2>
         </Grid2>
         <Footer />
      </>
   )
}

export default AirPollution
