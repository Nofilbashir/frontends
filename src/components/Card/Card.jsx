import React from 'react'
import './Card.css'

const Card = (props) => {
  
    
    const {heading, amount}  =props
  return (
    <div className='card'>
        <h4>{heading}</h4>
        <hr />
        <h3>{amount} </h3>
    </div>
  )
}

export default Card