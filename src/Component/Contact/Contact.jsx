import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className="c-wrapper">
        <div className="left">
            <span>Get in touch</span>
            <span>Contact me</span>
        </div>
        <div className="right">
            <form>
                <input type="text" name='user_name' className='user' placeholder="Name"/>
                <input type="email" name='user_email' className='user' placeholder="Email"/>
                <input type="text" name='message' className='user' placeholder="Text"/>
                <input type="submit" name='button' className=' button' placeholder="Send"/>

            </form>
        </div>
    </div>
  )
}

export default Contact