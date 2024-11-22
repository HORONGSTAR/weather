import SliceItem from './SliceItem'
import { useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'

function SliceBox({ coords }) {
   const { loading, error } = useSelector((state) => state.local)
   if (loading) return <p> Loading...</p>
   if (error) return <p>문제가 생겼어요! : {error}</p>
   console.log(coords)

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
            {coords &&
               coords.map((coord) => (
                  <SwiperSlide>
                     <SliceItem coord={coord[0]} name={coord[1]} />
                  </SwiperSlide>
               ))}
         </Swiper>
      </>
   )
}

export default SliceBox
