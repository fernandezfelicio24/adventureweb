import React, { Fragment } from 'react'
import Card from '../components/Card'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'

function Home() {
    return (
        <Fragment>
            <HeroSection/>
            <Card/>
            <Footer/>
        </Fragment>
    )
}

export default Home;
