import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Nature from './Nature';
import Nature2 from './Nature2';
import Nature3 from './Nature3';

const Places = () => {
  return (
    <div className='w-[100vw] h-[100vh]'>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><Nature /></SwiperSlide>
        <SwiperSlide><Nature2 /></SwiperSlide>
        <SwiperSlide><Nature3 />F</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Places