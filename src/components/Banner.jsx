import { Box } from '@mui/material'
import { bannerSx } from '../style/StyledComponent'

function Banner() {
   const today = new Date()
   const todays = {
      year: today.getFullYear(),
      month: today.getMonth() + 1,
      date: today.getDate(),
      day: today.getDay(),
      week: ['일', '월', '화', '수', '목', '금', '토'],
   }

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
