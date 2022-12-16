import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/free-solid-svg-icons';
import {FaEnvelope} from 'react-icons/fa'

import './name.css'

const Name = () => {
  return (
    <div className='name__wrapper'>
      <div className='name__text'>
        <h1>Abdulmunaim Alsaeed</h1>
        <h3>Marketing and Branding Specialist</h3>
        <p>www.flawless-creativity.com</p>
      </div>
        <div className='email__wrpper'>
          <div className='email__icon'> <FaEnvelope/> </div>
          <h3>Email</h3>
        </div>
        <div className='info__text'>
          <h2>About</h2>
          <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
          <h2>Interests</h2>
          <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </div>
    </div>
  )
}

export default Name