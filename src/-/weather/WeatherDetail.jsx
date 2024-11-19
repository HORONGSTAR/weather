import { Grid2 } from '@mui/material'
import WeatherCard from './WeatherCard'
import ForecastCard from './ForecastCard'

function WeatherDetail({ itemValue, lon, lat }) {
   return (
      <>
         <Grid2 container spacing={2}>
            <Grid2 size={6}>{itemValue && <WeatherCard lon={lon} lat={lat} />}</Grid2>
            <Grid2 ize={6}></Grid2>
         </Grid2>
         <Grid2 container spacing={2}>
            {itemValue && <ForecastCard lon={lon} lat={lat} />}
         </Grid2>
      </>
   )
}

export default WeatherDetail
