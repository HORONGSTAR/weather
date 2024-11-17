import WeatherSliceCard from './WeatherSliceCard'
import { localDatas } from '../../database/InternaLdata'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'

function WeatherSection() {
   return (
      <>
         <Swiper
            slidesPerView={2}
            spaceBetween={10}
            autoplay={{
               delay: 2500,
               disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
         >
            {localDatas.map((localData) => (
               <>
                  <SwiperSlide>
                     <WeatherSliceCard
                        lat={localData.lat}
                        lon={localData.lon}
                        name={localData.name}
                     />
                  </SwiperSlide>
               </>
            ))}
         </Swiper>
      </>
   )
}

export default WeatherSection
