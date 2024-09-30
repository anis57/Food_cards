import React from 'react'
import './Card.css'

const Card = ({data,onClick}) => {
  const {name, price, img1} = data;
  return (
    <div className='card-wrapper' onClick={onClick}>
        <div className="image">
            <img src={img1} />
        </div>
        <div className="name">
            <p>{name}</p>
        </div>
        <div className="price">
            <p>{price}</p>
        </div>
    </div>
  )
}

export default Card