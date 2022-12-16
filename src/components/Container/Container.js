import React from 'react'
import './container.css'

import { Photo , Name, Summery, Social } from '../index.js'

const Container = () => {
  return (
    <div className='container__body'>
      <Photo />
      <Name />
      <Social />
    </div>
  )
}

export default Container
