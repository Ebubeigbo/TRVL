import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import Image2 from '../assets/images/img-2.jpg' 
import Image3 from '../assets/images/img-3.jpg' 
import Image4 from '../assets/images/img-4.jpg' 
import Image8 from '../assets/images/img-8.jpg' 
import Image9 from '../assets/images/img-9.jpg' 

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out this EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem 
              src={Image9}
              text='Explore the hidden waterfall deep inside the Amazon Jungle' 
              label='Adventure' 
              path='/services'
            />
            <CardItem 
              src={Image2}
              text='Travel through the Island of Bali in a Private Cruise' 
              label='Luxury' 
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem 
              src={Image3}
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters' 
              label='Mystery' 
              path='/services'
            />
            <CardItem 
              src={Image4}
              text='Experience Football on top of the Himilayan Mountains' 
              label='Adventure' 
              path='/products'
            />
            <CardItem 
              src={Image8}
              text='Ride through the Sahara on a guided camel tour' 
              label='Adrenaline' 
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards