import React from 'react'
import '../../design/cards.scss'
import f1 from '../../assets/cards/f1.png'
import f2 from '../../assets/cards/f2.png'
import f3 from '../../assets/cards/f3.png'
import f4 from '../../assets/cards/f4.png'
import m1 from '../../assets/cards/m1.png'
import m2 from '../../assets/cards/m2.png'
import m3 from '../../assets/cards/m3.png'
import m4 from '../../assets/cards/m4.png'

export const Cards = () => {

    const woman = [
        {
            id: 1,
            image: f1,
            title: 'Sweater',
            price: '255',
            color: 3
        },
        {
            id: 2,
            image: f2,
            title: 'Boat neck dress',
            price: '350',
            color: 6
        },
        {
            id: 3,
            image: f3,
            title: 'Knot shirt',
            price: '180',
            color: 2
        },
        {
            id: 4,
            image: f4,
            title: 'Colorful shirt',
            price: '420',
            color: 3
        },
    ]

    const man = [
        {
            id: 1,
            image: m1,
            title: 'Sweater',
            price: '255',
            color: 3
        },
        {
            id: 2,
            image: m2,
            title: 'Boat neck dress',
            price: '350',
            color: 6
        },
        {
            id: 3,
            image: m3,
            title: 'Knot shirt',
            price: '180',
            color: 2
        },
        {
            id: 4,
            image: m4,
            title: 'Colorful shirt',
            price: '420',
            color: 3
        },
    ]

    return (
        <div className="cards">
            <div className="woman">
                <p className="title">女套衫</p>

                <div className="wrap">
                    {
                        woman.map(item => (
                        <div key={item.id} className="card">
                            <img src={item.image} alt="" />
                            <div className="info">
                                <h5>{item.title}</h5>
                                <p>$ {item.price}</p>
                                <p>{item.color} colors</p>
                            </div>
                        </div>
                        ))
                    }
                </div>
                <p className="enter">
                    <span>查看所有产品</span>
                    <button>
                        <svg width="26" height="8" viewBox="0 0 26 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.51239 3.61304H24.5124" stroke="black"/>
                            <path d="M21.9492 6.80054L25.1367 3.61304L21.9492 0.425537" stroke="black"/>
                        </svg>
                    </button>
                </p>
            </div>

            <hr />

            <div className="man">
                <p className="title">男套衫</p>

                <div className="wrap">
                    {
                        man.map(item => (
                        <div key={item.id} className="card">
                            <img src={item.image} alt="" />
                            <div className="info">
                                <h5>{item.title}</h5>
                                <p>$ {item.price}</p>
                                <p>{item.color} colors</p>
                            </div>
                        </div>
                        ))
                    }
                </div>
                <p className="enter">
                    <span>查看所有产品</span>
                    <button>
                        <svg width="26" height="8" viewBox="0 0 26 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.51239 3.61304H24.5124" stroke="black"/>
                            <path d="M21.9492 6.80054L25.1367 3.61304L21.9492 0.425537" stroke="black"/>
                        </svg>
                    </button>
                </p>
            </div>
        </div>
    )
}