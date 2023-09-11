import React from 'react'
import './Card.css'

const Card = (props) => {
  return (

    <div className="card">
        <img src={props.image}/>
        <span>{props.title}</span>
        <span>{props.text}</span>


    </div>
  )
}

export default Card