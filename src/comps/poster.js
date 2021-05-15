import React from 'react'
import '../../design/poster.scss'
import small from '../../assets/poster/postersmall.png'

export const Poster = () => {

    return (
        <div className="poster">
            <div>
                <img src={small} alt="" />
            </div>

            <div>
                <h1>初秋<br />焕新</h1>
            </div>

            <div>
            </div>
        </div>
    )
}