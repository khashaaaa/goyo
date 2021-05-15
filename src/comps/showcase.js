import React from 'react'
import SwiperCore, { Controller, Navigation, Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'

import img1 from '../../assets/showcase/slide1img1.png'
import img2 from '../../assets/showcase/slide1img2.png'
import img3 from '../../assets/showcase/slide1img3.png'
import img4 from '../../assets/showcase/slide1img4.png'
import img21 from '../../assets/showcase/slide2img1.png'
import img22 from '../../assets/showcase/slide2img2.png'
import img23 from '../../assets/showcase/slide2img3.png'
import img24 from '../../assets/showcase/slide2img4.png'

// Swiper carousel module uses
SwiperCore.use([Controller, Navigation, Pagination, Autoplay])

export const Showcase = () => {

    const slidez = [
        <SwiperSlide key={1}>
            <div className="small">
                <div className="image">
                    <img src={img4} alt="" />
                    <img src={img1} alt="" />
                </div>
                <p className="desc">关于戈壁羊绒</p>
            </div>
            <h1>初秋</h1>
            <div className="large">
                <div className="image">
                    <img src={img2} alt="" />
                </div>
                <div className="vertical">
                    <p>关</p>
                    <p>于</p>
                    <p>戈</p>
                    <p>壁</p>
                    <p>羊</p>
                    <p>绒</p>
                </div>
            </div>
        </SwiperSlide>,
        <SwiperSlide key={2}>
            <div className="small">
                <div className="image">
                    <img src={img24} alt="" />
                    <img src={img21} alt="" />
                </div>
                <p className="desc">关于戈壁羊绒</p>
            </div>
            <h1>初秋</h1>
            <div className="large">
                <div className="image">
                    <img src={img22} alt="" />
                </div>
                <div className="vertical">
                    <p>关</p>
                    <p>于</p>
                    <p>戈</p>
                    <p>壁</p>
                    <p>羊</p>
                    <p>绒</p>
                </div>
            </div>
        </SwiperSlide>
    ]

    return (
        <div className="showcase">
            <Swiper navigation pagination={{ clickable: true }} loop autoplay={{delay: 5000}}>
                {slidez}
            </Swiper>
        </div>
    )
}