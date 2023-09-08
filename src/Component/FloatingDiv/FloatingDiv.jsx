import React from 'react'
import './FloatingDiv.css'

const FloatingDiv = ({image,text1,text2}) => {
  return (
    <div className="floatingdiv">
    
    <img src={image} alt="Crown"/>
    <div className="text">
    <span>{text1}</span>
    <br/>
    <span>{text2}</span>
    </div>
    

    </div>
  )
}

export default FloatingDiv