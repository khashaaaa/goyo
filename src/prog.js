import React from 'react'
import { Header } from './comps/header'
import { Showcase } from './comps/showcase'
import { Anno } from './comps/anno'
import { Tiles } from './comps/tiles'
import { Cards } from './comps/cards'
import { Poster } from './comps/poster'
import { Slider } from './comps/slider'
import { Footer } from './comps/footer'

export const Prog = () => {
    return (
        <>
            <Header />
            <Showcase />
            <Anno />
            <Tiles />
            <Cards />
            <Poster />
            <Slider />
            <Footer />
        </>
    )
}