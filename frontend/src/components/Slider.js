import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import beforeafter from '../sample_images/beforeafter.png'
const Slider = () => {
  return (
    <Swiper
    spaceBetween={50}
    slidesPerView={1}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide>
        <img src={beforeafter}/>
        <h3 className='py-3'>An average 16 week transformation</h3>
    </SwiperSlide>
    <SwiperSlide>
        <img src={beforeafter}/>
    </SwiperSlide>
    <SwiperSlide>
        <img src={beforeafter}/>
    </SwiperSlide>
    <SwiperSlide>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/Nr3QSu17V8s" allow="accelerometer; autoplay; " allowfullscreen='true'></iframe>
    </SwiperSlide> 
  </Swiper>
  )
}

export default Slider

