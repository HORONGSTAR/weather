import ForecastTap from '../../components/weather/tap/ForecastTap'
import CardBox from '../../components/weather/WeatherBox'
import { Stack } from '@mui/material'

function Forecast({ isReset }) {
   return (
      <>
         {isReset && (
            <>
               <CardBox />
               <ForecastTap />
            </>
         )}
      </>
   )
}

export default Forecast
