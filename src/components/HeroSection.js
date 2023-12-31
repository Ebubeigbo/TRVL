import React from 'react';
import '../App.css'
import { Button } from './Button';
import './HeroSection.css';
import Videos from "../assets/videos/video-2.mp4";

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src={Videos} autoPlay loop muted/>
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn-outline' buttonSize='btn-large'>GET STARTED</Button>
            <Button className='btns' buttonStyle='btn-primary' buttonSize='btn-large'>WATCH TRAILER <i className='fa-regular fa-play-circle' /></Button>
        </div>
    </div>
  )
}

export default HeroSection