function TodayBanner() {
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
         <p>
            {todays.year}년 {todays.month}월 {todays.date}일 {todays.week[todays.day]}요일
         </p>
      </>
   )
}

export default TodayBanner
