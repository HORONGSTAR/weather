import Menu from '../components/Menu'
import Footer from '../components/Footer'
import SliceBox from '../components/slices/SliceBox'
import AirTable from '../components/table/AirTable'
import Banner from '../components/Banner'
import { Grid2 } from '@mui/material'

function Home() {
   return (
      <>
         <Menu />
         <Banner />
         <Grid2 container spacing={2}>
            <Grid2 size={{ xs: 12, sm: 6, md: 8 }}>
               <SliceBox />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
               <AirTable />
            </Grid2>
         </Grid2>
         <Footer />
      </>
   )
}

export default Home
