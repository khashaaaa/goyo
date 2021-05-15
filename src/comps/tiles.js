import React from 'react'
import '../../design/tiles.scss'

import top1 from '../../assets/tiles/img1.png'
import top2 from '../../assets/tiles/img2.png'
import top3 from '../../assets/tiles/img3.png'
import bot1 from '../../assets/tiles/img4.png'
import bot2 from '../../assets/tiles/img5.jpg'

const top = [
    {
        url: top1,
        key: 1,
        text: '裙装'
    },
    {
        url: top2,
        key: 2,
        text: '套装'
    },
    {
        url: top3,
        key: 3,
        text: '套衫'
    }
]

const bot = [
    {
        url: bot1,
        key: 1,
        text: '圆领'
    },
    {
        url: bot2,
        key: 2,
        text: 'V-领'
    }
]

export const Tiles = () => {

    return (
        <div className="tiles">
            <div className="top">
                {
                    top.map(image => <div key={image.key}><span>{image.text}</span><img src={image.url} alt="" /><div></div></div>)
                }
            </div>

            <div className="bottom">
                {
                    bot.map(image => <div key={image.key}><span>{image.text}</span><img src={image.url} alt="" /><div></div></div>)
                }
            </div>
        </div>
    )
}