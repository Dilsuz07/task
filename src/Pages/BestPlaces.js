import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import Slider1 from '../image/slider1.png'
import Slider2 from '../image/slider2.png'
import Slider3 from '../image/slider3.png'
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import PlaceCard from './../Components/Cards/PlaceCard';


const BestPlaces = () => {
    return (
        <div className='w-full h-[100vh] p-[50px_0] text-center bg-[#345059]'>
            <p className='up-class font-normal text-[50px] mb-[50px] leading-[59px] text-[#FCCF06]'>Best places to visit</p>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><PlaceCard image={Slider1} text={'Kizikum'} /></SwiperSlide>
                <SwiperSlide><PlaceCard image={Slider2} text={'Sarmishsay'} /></SwiperSlide>
                <SwiperSlide><PlaceCard image={Slider3} text={'Sardoba'} /></SwiperSlide>
                <SwiperSlide><PlaceCard image={Slider1} text={'Kizikum'} /></SwiperSlide>
                <SwiperSlide><PlaceCard image={Slider2} text={'Sarmishsay'} /></SwiperSlide>
                <SwiperSlide><PlaceCard image={Slider3} text={'Sardoba'} /></SwiperSlide>
                <SwiperSlide><PlaceCard image={Slider1} text={'Kizikum'} /></SwiperSlide>
                <SwiperSlide><PlaceCard image={Slider2} text={'Sarmishsay'} /></SwiperSlide>
                <SwiperSlide><PlaceCard image={Slider3} text={'Sardoba'} /></SwiperSlide>

            </Swiper>
        </div>
    )
}

export default BestPlaces