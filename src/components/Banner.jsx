import { Box } from '@mui/material'
import { bannerSx } from '../style/StyledComponent'
import { todays } from '../database/InternaLdata'

function Banner() {
   return (
      <>
         <Box sx={bannerSx[0]}>
            <Box sx={bannerSx[1]}>{todays.year}년</Box>
            <Box sx={bannerSx[1]}>{todays.month}월</Box>
            <Box sx={bannerSx[1]}>{todays.date}일</Box>
            <Box sx={bannerSx[1]}>{todays.week[todays.day]}요일</Box>
         </Box>
      </>
   )
}

export default Banner
