import SliceItem from './SliceItem'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'

function SliceBox({ coords }) {
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
            <SwiperSlide>
               {coords.map((coord) => (
                  <SliceItem coord={coord} />
               ))}
            </SwiperSlide>
         </Swiper>
      </>
   )
}

export default SliceBox
