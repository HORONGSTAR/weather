import { Route, Routes } from 'react-router-dom'
import { Wrap } from './style/StyledComponent'
import './style/App.css'
import Home from './page/Home'
import Forecast from './page/Forecast'
import AirPollution from './page/AirPollution'
import Planetarium from './page/Planetarium'
import NotFound from './page/NotFound'

function App() {
   return (
      <Wrap>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Forecast" element={<Forecast />} />
            <Route path="/airPollution" element={<AirPollution />} />
            <Route path="/planetarium" element={<Planetarium />} />
            <Route path="/*" element={<NotFound />} />
         </Routes>
      </Wrap>
   )
}

export default App
