import { Box } from '@mui/material'
import { bannerSx, BannerImg } from '../style/StyledComponent'
import { todays } from '../database/InternaLdata'

function Banner() {
   return (
      <>
         <BannerImg>
            <Box sx={bannerSx()[0]}>
               <Box sx={bannerSx()[1]}>오늘은</Box>
               <Box sx={bannerSx()[1]}>
                  {todays.year}년 {todays.month}월 {todays.date}일 {todays.week[todays.day]}
                  요일
               </Box>
               <br />
               <Box sx={bannerSx('20px')[1]}>함께 날씨를 확인해 볼까요?</Box>
            </Box>
         </BannerImg>
      </>
   )
}

export default Banner
