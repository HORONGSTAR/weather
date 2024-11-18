import WeatherSliceCard from './WeatherSliceCard'
import { localDatas } from '../../database/InternaLdata'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'

function WeatherSection() {
   return (
      <>
         <p>오늘의 날씨는?</p>
         <Swiper
            slidesPerView={3}
            spaceBetween={10}
            loop={true}
            autoplay={{
               delay: 2500,
               disableOnInteraction: false,
            }}
            breakpoints={{
               640: {
                  slidesPerView: 4,
                  spaceBetween: 10,
               },
               768: {
                  slidesPerView: 5,
                  spaceBetween: 10,
               },
               1024: {
                  slidesPerView: 6,
                  spaceBetween: 10,
               },
            }}
            modules={[Autoplay]}
            className="mySwiper"
         >
            {localDatas.map((localData) => (
               <>
                  <SwiperSlide>
                     <WeatherSliceCard lat={localData.lat} lon={localData.lon} name={localData.name} />
                  </SwiperSlide>
               </>
            ))}
         </Swiper>
      </>
   )
}

export default WeatherSection
