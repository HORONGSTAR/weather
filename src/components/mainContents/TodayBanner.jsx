import { Box } from '@mui/material'

function TodayBanner() {
   const today = new Date()
   const todays = {
      year: today.getFullYear(),
      month: today.getMonth() + 1,
      date: today.getDate(),
      day: today.getDay(),
      week: ['일', '월', '화', '수', '목', '금', '토'],
   }

   const sx1 = {
      padding: '10px',
      fontFamily: 'Gamja Flower, sans-serif',
      fontSize: '24px',
      fontWeight: 'bold',
   }

   const sx2 = {
      width: '100%',
      height: '200px',
      margin: '20px 0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'skyblue',
      borderRadius: '2px',
   }

   return (
      <>
         <Box sx={sx2}>
            <Box sx={sx1}>{todays.year}년</Box>
            <Box sx={sx1}>{todays.month}월</Box>
            <Box sx={sx1}>{todays.date}일</Box>
            <Box sx={sx1}>{todays.week[todays.day]}요일</Box>
         </Box>
      </>
   )
}

export default TodayBanner
