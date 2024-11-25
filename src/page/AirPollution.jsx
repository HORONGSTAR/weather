import AirTable from '../components/air/table/AirTable'
import MapBox from '../components/air/box/MapBox'
import { Grid2 } from '@mui/material'
import SubTitle from '../style/StyledComponent'

function AirPollution() {
   return (
      <>
         <SubTitle>현재 미세먼지 농도는 어떨까요?</SubTitle>
         <Grid2 spacing={2} container>
            <Grid2 size={{ xs: 12, md: 5 }}>
               <MapBox />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 7 }}>
               <AirTable height={'100%'} />
            </Grid2>
         </Grid2>
      </>
   )
}

export default AirPollution
