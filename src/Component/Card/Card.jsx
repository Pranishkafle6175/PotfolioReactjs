import React from 'react'

const Card = (props) => {
  return (

    <div className="card">
        <img src={props.image}/>
        <p>{props.title}</p>
        <p>{props.text}</p>


    </div>
  )
}

export default Card