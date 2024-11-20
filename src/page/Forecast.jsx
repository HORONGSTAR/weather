import Menu from '../components/Menu'
import Footer from '../components/Footer'
import CitySelect from '../components/details/CitySelect'
import ForecastTap from '../components/taps/ForecastTap'
import CardBox from '../components/details/CardBox'

function Forecast() {
   return (
      <>
         <Menu />
         <CitySelect page={'forecast'} />
         <CardBox />
         <ForecastTap page={'forecast'} />
         <Footer />
      </>
   )
}

export default Forecast
