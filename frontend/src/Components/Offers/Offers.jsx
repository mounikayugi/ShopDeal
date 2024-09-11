import React from 'react'
import './Offers.css'
import offer1 from '../Assets/sale_1.jpeg'
import offer2 from '../Assets/offer3.jpeg'

const Offers = () => {
    return (
        <div className="offers">
        <h1>Super Dhamaka Deals</h1>
        <hr/>
        <div className="offers_img">
            <img src={offer1} alt="" />
            <img src={offer2} alt="" />
        </div>
        </div>
    )
}

export default Offers