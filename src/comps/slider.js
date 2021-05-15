import React from 'react'
import SwiperCore, { Scrollbar, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import '../../design/slider.scss'
import 'swiper/swiper.scss'
import 'swiper/components/scrollbar/scrollbar.scss'

import img1 from '../../assets/slider/slider1.png'
import img2 from '../../assets/slider/slider2.png'
import img3 from '../../assets/slider/slider3.png'
import img4 from '../../assets/slider/slider4.png'

SwiperCore.use([Scrollbar, Autoplay])

// Dummy data
const items = [
    {
        id: 1,
        title: 'dress with drawstrings',
        image: img1
    },
    {
        id: 2,
        title: 'dress with drawstrings',
        image: img2
    },
    {
        id: 3,
        title: 'dress with drawstrings',
        image: img3
    },
    {
        id: 4,
        title: 'dress with drawstrings',
        image: img4
    },
    {
        id: 5,
        title: 'dress with drawstrings',
        image: img3
    },
    {
        id: 6,
        title: 'dress with drawstrings',
        image: img4
    },
    {
        id: 7,
        title: 'dress with drawstrings',
        image: img1
    },
    {
        id: 8,
        title: 'dress with drawstrings',
        image: img2
    }
]

var too = 4

if(window.innerWidth <= 1600) {
    too = 3
}
if(window.innerWidth <= 800) {
    too = 2
}

export const Slider = () => {

    return (
        <div className="slider">
            <p>精纺系列</p>
            <Swiper scrollbar slidesPerView={too} autoplay>
                {
                    items.map(item => (
                        <SwiperSlide key={item.id}>
                            <img src={item.image} alt={item.title} />
                            <div className="overlay">
                                <p>{item.title}</p>
                                <button>SHOP NOW</button>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}