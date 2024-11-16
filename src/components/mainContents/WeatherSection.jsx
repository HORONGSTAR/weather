import WeatherSectionCard from './WeatherSectionCard'
import { Grid2 } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

function WeatherSection() {
   return (
      <>
         <Grid2 container spacing={2}>
            <Grid2 ize={6}>
               <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                     delay: 2500,
                     disableOnInteraction: false,
                  }}
                  pagination={{
                     clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
               >
                  <SwiperSlide>
                     <WeatherSectionCard locals={'Gyeonggi-do'} name={'수도권'} />
                  </SwiperSlide>
               </Swiper>
            </Grid2>
         </Grid2>
         <Grid2 container spacing={2}></Grid2>
      </>
   )
}

export default WeatherSection
