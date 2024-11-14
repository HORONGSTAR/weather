import { Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import WeatherForecast from './page/WeatherForecast'
import AirPollution from './page/AirPollution'
import Planetarium from './page/Planetarium'
import NotFound from './page/NotFound'

function App() {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/weather" element={<WeatherForecast />} />
         <Route path="/airPollution" element={<AirPollution />} />
         <Route path="/planetarium" element={<Planetarium />} />
         <Route path="/*" element={<NotFound />} />
      </Routes>
   )
}

export default App
