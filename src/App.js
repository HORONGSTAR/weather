import { Route, Routes } from 'react-router-dom'
import { Wrap } from './style/StyledComponent'
import './style/App.css'
import Home from './page/Home'
import NotFound from './page/NotFound'

function App() {
   return (
      <Wrap>
         <Routes>
            <Route path="/" element={<Home page={'home'} />} />
            <Route path="/" element={<Home page={'home'} />} />
            <Route path="/forecast" element={<Home page={'forecast'} />} />
            <Route path="/airPollution" element={<Home page={'airPollution'} />} />
            <Route path="/*" element={<NotFound />} />
         </Routes>
      </Wrap>
   )
}

export default App
