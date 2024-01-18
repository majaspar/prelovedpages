
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'


import slide_image_1 from '../../assets/cover1.jpg'
import slide_image_2 from '../../assets/cover2.jpg'
import slide_image_3 from '../../assets/cover3.jpg'
import slide_image_4 from '../../assets/cover4.jpg'
import slide_image_5 from '../../assets/cover5.jpg'
import slide_image_6 from '../../assets/cover6.jpg'
import slide_image_7 from '../../assets/cover7.jpg'

export default function FeaturedBooks() {
    return (
        <div className="FeaturedBooks">
            <Swiper
            
                effect={'coverflow'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 200,
                    modifier: 1,
                }}
                grabCursor={true}
                slidesPerView={'auto'}
                centeredSlides={true}
                loop={true}
                breakpoints={{
                    0: { slidesPerView: 3 },
                    640: { slidesPerView: 5 },
                    1200: { slidesPerView: 7 }
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }}
                pagination={{ clickable: true, el: '.swiper-pagination', type: 'bullets' }}
                modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                
                }}
            >
                <SwiperSlide className='swiper-slide--one swiper-slide'>
                    <img src={slide_image_1} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide className='swiper-slide--two swiper-slide'>
                    <img src={slide_image_2} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide className='swiper-slide--three swiper-slide'>
                    <img src={slide_image_3} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide className='swiper-slide--four swiper-slide'>
                    <img src={slide_image_4} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide className='swiper-slide--five swiper-slide'>
                    <img src={slide_image_5} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_6} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_7} alt="slide_image" />
                </SwiperSlide>

                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>

                </div> <div className="swiper-pagination"></div>
            </Swiper>
        </div>
    )
}
