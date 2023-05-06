import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper-bundle.min.css"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import gymOne from "../sample_images/gymone.jfif"
import gymTwo from "../sample_images/gymtwo.jfif"
import gymThree from "../sample_images/gymthree.jfif"
import { Container } from "react-bootstrap"
const Slider = () => {
  return (

    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
          <SwiperSlide>
            <img width='560' height='315' src={gymOne} />
            <h3 className='py-3'></h3>
          </SwiperSlide>
          <SwiperSlide>
            <img width='560' height='315' src={gymTwo} />
          </SwiperSlide>
          <SwiperSlide>
            <img width='560' height='315' src={gymThree} />
          </SwiperSlide>
          <SwiperSlide>
            <iframe
              width='560'
              height='315'
              src='https://www.youtube.com/embed/Nr3QSu17V8s'
              allow='accelerometer; autoplay; '
              allowfullscreen='true'
            ></iframe>
          </SwiperSlide>
    </Swiper>
  )
}

export default Slider
