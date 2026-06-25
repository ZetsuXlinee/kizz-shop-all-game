import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

import bannerFf from '../assets/banner/free-fire-banner.png'
import bannerPubg from '../assets/banner/pubg-banner.png'
import bannerMl from '../assets/banner/ml-banner.png'

function HeroSlider() {
    return (
        <section id="home" className="hero-section">
            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={20}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false
                }}
                pagination={{ clicktable: true }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img
                        src={bannerFf}
                        alt="Promo Free Fire"
                        className="banner-img"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img
                        src={bannerPubg}
                        alt="Promo PUBG"
                        className="banner-img"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img
                        src={bannerMl}
                        alt="Promo Mobile Legend"
                        className="banner-img"
                    />
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default HeroSlider