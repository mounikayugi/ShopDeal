import React from 'react'
import './SuperDhamaka.css'
import offer1 from '../Assets/sale_1.jpeg'
import offer2 from '../Assets/offer3.jpeg'

const SuperDhamaka = () => {
    return (
        <div className="superdhamaka">
        <h1>Super Dhamaka Deals</h1>
        <hr/>
        <div className="superdhamaka_img">
            <img src={offer1} alt="" />
            <img src={offer2} alt="" />
        </div>
        </div>
    )
}

export default SuperDhamaka