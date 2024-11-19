import SliceItme from './SliceItme'
import { localDatas } from '../../database/InternaLdata'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'

function SliceBox() {
   return (
      <>
         <Swiper
            slidesPerView={3}
            spaceBetween={10}
            loop={true}
            autoplay={{
               delay: 2500,
               disableOnInteraction: false,
            }}
            breakpoints={{
               600: { slidesPerView: 2 },
               900: { slidesPerView: 4 },
               1200: { slidesPerView: 5 },
            }}
            modules={[Autoplay]}
            className="mySwiper"
         >
            {localDatas.map((localData) => (
               <>
                  <SwiperSlide>
                     <SliceItme lat={localData.lat} lon={localData.lon} name={localData.name} />
                  </SwiperSlide>
               </>
            ))}
         </Swiper>
      </>
   )
}

export default SliceBox
