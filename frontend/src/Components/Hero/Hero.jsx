import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import offers_calvin from '../Assets/slider1.jpg'
import offer_w from '../Assets/slider2.png'
import offer_h from '../Assets/slider3.png'
import offer_t from '../Assets/slider4.jpg'

const Hero = () => {
    return (
        <div className='hero'>
           <h1>CRAZY DEALS</h1>
           <hr/>
            <div id="carouselExampleIndicators" class="carousel slide " data-ride="carousel">    
                <ol class="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={offers_calvin} class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                    <img src={offer_w} class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                    <img src={offer_h} class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                    <img src={offer_t} class="d-block w-100" alt="..."/>
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
            </div>
            <div className="hero-latest-btn">
                <div>Shop Now</div>
                <img onClick=""src={arrow_icon} alt="" />
            </div>
    </div>
    )
}

export default Hero