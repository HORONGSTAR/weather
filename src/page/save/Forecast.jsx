import Menu from '../components/Menu'
import Footer from '../components/Footer'
import CitySelect from '../components/details/CitySelect'
import ForecastTap from '../components/taps/ForecastTap'
import CardBox from '../components/details/CardBox'
import { Stack } from '@mui/material'
import { PiStarFourFill } from 'react-icons/pi'

function Forecast() {
   return (
      <>
         <Menu />
         <h4>
            <PiStarFourFill style={{ fontSize: '12px' }} />
            &nbsp;지역 별로 날씨를 찾아볼 수 있어요!
         </h4>
         <Stack direction="row" spacing={2}>
            <CitySelect page={'forecast'} />
         </Stack>
         <CardBox />
         <ForecastTap page={'forecast'} />
         <Footer />
      </>
   )
}

export default Forecast
