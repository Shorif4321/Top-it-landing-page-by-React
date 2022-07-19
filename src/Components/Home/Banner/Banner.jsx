import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Banner.css";

const Banner = () => {
    return (
        <>
            <div id='home' className='banner-home container ' /* data-aos="zoom-in"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1500" */>
                <div className='row justify-content-between'>
                    <div className='col-12 col-md-6 col-lg-7 text-start'>
                        <h1 className='hero-head'>The #<span >1</span> Leading  IT Service</h1>
                        {/*    <h1 className='hero-head'>Grow up your Business and Branding as your <span> Dream</span>
                        </h1> */}
                        <p className='hero-description'>Growing up of business and branding is always challenging but not impossible.The more you use technology in business, the more people will be engaged and boostup business profit. </p>

                        <div className='hero-button text-start'>
                            <Link to="/service"> <button className='hero-button1'>Get Started</button></Link>
                            <Link to="/about-us">   <button className='hero-button2'>Read More</button></Link>
                        </div>
                    </div>

                    <div className="col-12 m-auto col-md-6 col-lg-4">
                        <div class="box" data-aos="zoom-in"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1500">
                            <div class="content" >
                                <img className='img-fluid' src="./../../../Images/banner.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;