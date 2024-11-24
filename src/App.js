import { Route, Routes } from 'react-router-dom'
import './style/App.css'
import Main from './page/Main'
import NotFound from './page/NotFound'

function App() {
   return (
      <Routes>
         <Route path="/" element={<Main page={'home'} />} />
         <Route path="/" element={<Main page={'home'} />} />
         <Route path="/forecast" element={<Main page={'forecast'} />} />
         <Route path="/airPollution" element={<Main page={'airPollution'} />} />
         <Route path="/*" element={<NotFound />} />
      </Routes>
   )
}

export default App
