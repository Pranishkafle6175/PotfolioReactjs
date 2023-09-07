import React from 'react'
import './Intro.css'
import github from '../../img/github.png'
import linkedin from '../../img/linkedin.png'
import instagram from '../../img/instagram.png'

const Intro = () => {
  return (
    <div className="intro">
        <div className="left-intro">

            <span>Hello! , I Am</span>
            <span>Pranish Kafle</span>
            <span>I am android developer working with java/Kotlin and firebase.I am android developer working with java/Kotlin 
                and firebase.I am android developer working with java/Kotlin
                 and firebase</span>

            <button className='button'> Hire me</button>

            <div className="images">

                <img src={github} alt='github'/>
                <img src={linkedin} alt='linkedin'/>
                <img src={instagram} alt='instagram'/>

            </div>
        </div>
        <div className="right-intro">Right</div>

    </div>
  )
}

export default Intro