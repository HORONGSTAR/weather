import WeatherSlice from '../components/weather/slice/WeatherSlice'
import AirTable from '../components/air/table/AirTable'
import Banner from '../components/Banner'
import { Grid2 } from '@mui/material'
import SubTitle from '../style/StyledComponent'

function Home() {
   return (
      <>
         <Banner />
         <Grid2 container spacing={2}>
            <Grid2 size={{ xs: 12, md: 8 }}>
               <SubTitle>실시간 일기예보</SubTitle>
               <WeatherSlice />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
               <SubTitle>실시간 미세먼지</SubTitle>
               <AirTable />
            </Grid2>
         </Grid2>
      </>
   )
}

export default Home
