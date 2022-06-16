import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import "./Banner.css";

const Banner = () => {
   


    return (
        <>
        <div className='banner-home container'>
            <div className='text-center mt-5 py-5'>
                <div className='col-12 col-md-8 m-auto'>
                    <h1 className='hero-head'>Grow up you Business and Branding as you <span> dream</span>
                    </h1>
                    <p className='hero-description'> Growing up in business and making branding is always challenging but not impossible. When you digitalise your business with the touch of technology for the purpose of making your own brands</p>
                    <div className='hero-button'>
                        <button className='hero-button1'>Get Started</button>
                        <button className='hero-button2'>Read More</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Banner;