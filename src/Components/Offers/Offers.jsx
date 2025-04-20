import React from 'react'
import './Offers.css'
import eclusive_image from '../Assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className="offers">
        <div className="offers-left">
            <h1>Exclussive</h1>
            <h1>Offers For You</h1>
            <p>Only ON Best Sellers Products</p>
            <button>Check Now</button>
        </div>      
        <div className="offers-right">
            <img src={eclusive_image} alt="" />
        </div>
    </div>
  )
}

export default Offers
