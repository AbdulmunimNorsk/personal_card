import React from 'react'
import './photo.css'
import pic from '../../assets/personal.jpg'

const Photo = () => {
  return (
    <div className='photo__container'>
        <img src={pic} alt='personal photo' />
    </div>
  )
}

export default Photo