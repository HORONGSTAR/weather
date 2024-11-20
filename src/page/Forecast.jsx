import Menu from '../components/Menu'
import Footer from '../components/Footer'
import CitySelect from '../components/details/CitySelect'
import ForecastTap from '../components/taps/ForecastTap'

function Forecast() {
   return (
      <>
         <Menu />
         <CitySelect page={'forecast'} />
         <ForecastTap page={'forecast'} />
         <Footer />
      </>
   )
}

export default Forecast
