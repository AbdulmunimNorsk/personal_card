import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/free-solid-svg-icons';
import {FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa'
import './social.css'

const Social = () => {
  return (
    <div className='social__container'>
        <div className='twitter'><FaTwitter /><p>Twitter</p></div>
        <div className='facebook'><FaFacebook /><p>Facebook</p></div>
        <div className='instagram'><FaInstagram /><p>Instagram</p></div>
        <div className='linkedin'><FaLinkedin /><p>Linkedin</p></div>
        <div className='gethub'><FaGithub /><p>Github</p></div>               
    </div>
  )
}

export default Social

