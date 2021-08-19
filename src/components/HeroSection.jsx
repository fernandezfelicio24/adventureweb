
import React from 'react'
import '../styles/HeroSection.css';
import tlsvid from '../assets/videos/video-3.mp4'
import { Button } from './Button'


function HeroSection() {
    return (
        <div className="hero-container">
            <video src={ tlsvid } autoPlay loop muted  />
            <h1>WE ARE WAITING FOR YOUR VISIT IN TIMOR LESTE</h1>
            <p>What are you waiting for ?</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large'>
                    GET STARTED
                </Button>
                <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large'>
                    WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;
