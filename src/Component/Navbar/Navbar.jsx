import React from 'react'
import './Navbar.css'
function Navbar() {
 
    return (
        <div className="n-wrapper">

            <div className="n-left">
                <div className="n-name">Pranish</div>
                <span>Toggle</span>
            </div>
            <div className="n-right">
                <ul className='n-items' style={{listStyleType:'none'}} >
                    <li>Home</li>
                    <li>Services</li>
                    <li>Experience</li>
                    <li>Portfolio</li>
                    <li>Testimonial</li>
                </ul>
                <button className='button'>Contact Us</button>
            </div>

        </div>
    
    )
}

export default Navbar