import React from 'react';
import "./Banner.css";
import heroImage from "../../../Images/banner.png"

const Banner = () => {
    return (
        <div className="mb-5 pb-5">
            <div className='d-md-flex  align-items-center'>
                <div className='col-12 col-md-6 ps-md-5 banner-left'>
                    <h1 className='hero-head'>Grow up you <br /> Business and Branding <br /> as you dream
                    </h1>
                    <p className='hero-description'> Growing up in business and making branding is always challenging but not impossible. When you digitalise your business with the touch of technology for the purpose of making your own brands</p>
                    <div className='hero-button'>
                        <button className='hero-button1'>Get Started</button>
                        <button className='hero-button2'>Read More</button>
                    </div>
                </div>
                <div className='col-12 col-md-6'>
                    <img className='hero-image' src={heroImage} alt="Banner image" />

                </div>
            </div>

        </div>
    );
};

export default Banner;