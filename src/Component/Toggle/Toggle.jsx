import React from 'react'
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
import './Toggle.css'

const Toggle = () => {
  return (
    <div className="toggle">
        <Moon />
        <Sun />
        <div className="togglebutton"> 
        </div>
    </div>
  )
}

export default Toggle