import React from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import {Swiper, SwiperSlide} from 'swiper/react';
// import 'swiper/css/swiper.min.css'


// import 'swiper.scss';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);



export default () => {
    return (

        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide> Slide 1 </SwiperSlide>
                <SwiperSlide> Slide 1 </SwiperSlide>
                <SwiperSlide> Slide 1 </SwiperSlide>
                <SwiperSlide> Slide 1 </SwiperSlide>
                <SwiperSlide> Slide 1 </SwiperSlide>
                <SwiperSlide> Slide 1 </SwiperSlide>

            </Swiper>

    );
};