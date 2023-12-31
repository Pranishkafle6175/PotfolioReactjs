import React from 'react'
import footer from '../../img/wave.png'
import './Footer.css'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'

const Footer = () => {
  return (
      <div className='footer'>
      <img src={footer} alt="Footer" style={{width:"100%"}}/>
      <div className="content">
            <span>pranishkafle1@gmail.com</span>
            <div className="icons">
                <Insta color="white" size={'3rem'}/>
                <Facebook color="white" size={'3rem'} />
                <Github  color="white" size={'3rem'} />
            </div>
      </div>
    </div>
  )
}

export default Footer