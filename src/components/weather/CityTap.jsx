import ForecastCard from './ForecastCard'
import WeatherCard from './WeatherCard'
import WeatherDetail from './WeatherDetail'
import Grid from '@mui/material/Grid2'

function CityTap() {
   return (
      <>
         <Grid container spacing={2}>
            <Grid size={8}>
               <WeatherCard />
            </Grid>
            <Grid ize={4}>
               <WeatherDetail />
            </Grid>
         </Grid>
         <Grid container spacing={2}>
            <ForecastCard />
         </Grid>
      </>
   )
}

export default CityTap
