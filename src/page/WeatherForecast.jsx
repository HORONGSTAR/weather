import Menu from '../components/Menu'
import CityTap from '../components/weather/CityTap'
import Footer from '../components/Footer'

function WeatheForecast() {
   return (
      <>
         <Menu />
         <main>
            <CityTap />
         </main>
         <Footer />
      </>
   )
}

export default WeatheForecast
