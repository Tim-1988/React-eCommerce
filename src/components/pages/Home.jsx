import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import './slides/swiper.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import iphone from './slides/iphone.jpg'
import s23 from './slides/s23.jpg'
import s23ultra from './slides/s23ultra.jpg'
import nikon1 from './slides/nikon1.jpg'
import nikon2 from './slides/nikon2.jpg'
import mac from './slides/mac.jpg'
import pc from './slides/pc.jpg'
import './home.css'


const Home = () => {
  return (
    <div className='home'>

  
    <Swiper className='swiper'
    modules={[ Autoplay, Navigation, Pagination ]}
      autoplay={true}
      speed={700}
      navigation
      loop 
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      pagination={{ clickable: true }}
    >
      <SwiperSlide className='swiperslide'>{<img src={iphone} alt="" className='slider-img' />}</SwiperSlide>
      <SwiperSlide className='swiperslide'>{<img src={s23} alt="" className='slider-img' />}</SwiperSlide>
      <SwiperSlide className='swiperslide'>{<img src={s23ultra} alt="" className='slider-img' />}</SwiperSlide>
      <SwiperSlide className='swiperslide'>{<img src={nikon1} alt="" className='slider-img' />}</SwiperSlide>
      <SwiperSlide className='swiperslide'>{<img src={nikon2} alt="" className='slider-img' />}</SwiperSlide>
      <SwiperSlide className='swiperslide'>{<img src={mac} alt="" className='slider-img' />}</SwiperSlide>
      <SwiperSlide className='swiperslide'>{<img src={pc} alt="" className='slider-img' />}</SwiperSlide>
      ...
    </Swiper>
  

    </div>
  )
}

export default Home