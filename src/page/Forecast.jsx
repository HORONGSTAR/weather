import Menu from '../components/Menu'
import Footer from '../components/Footer'
import CityTap from '../components/details/CityTap'
import ForecastList from '../components/details/ForecastList'

function Forecast() {
   return (
      <>
         <Menu />
         <CityTap page={'forecast'} />
         <ForecastList page={'forecast'} />
         <Footer />
      </>
   )
}

export default Forecast
