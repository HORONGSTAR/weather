import WeatherSliceItem from './WeatherSliceItem'
import { useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'

function SliceBox() {
   const { loading, error } = useSelector((state) => state.local)
   const { items } = useSelector((state) => state.item)

   if (loading) return <p> 정보를 찾아오는 중...</p>
   if (error) return <p>문제가 생겼어요! : {error}</p>

   return (
      <>
         <Swiper
            slidesPerView={2}
            spaceBetween={10}
            loop={true}
            autoplay={{
               delay: 2500,
               disableOnInteraction: false,
            }}
            breakpoints={{
               600: { slidesPerView: 3 },
               900: { slidesPerView: 4 },
            }}
            modules={[Autoplay]}
            className="mySwiper"
         >
            {items &&
               items.map((item) => (
                  <SwiperSlide>
                     <WeatherSliceItem
                        key={'WeatherSliceItem/' + item.key}
                        itemKey={item.key}
                        itemName={item.name}
                     />
                  </SwiperSlide>
               ))}
         </Swiper>
      </>
   )
}

export default SliceBox
