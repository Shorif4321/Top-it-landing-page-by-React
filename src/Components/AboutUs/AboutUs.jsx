import React from 'react';
import "./AboutUs.css"
import aboutMain from '../../Images/aboutMain.png'
import right from '../../Images/rightServiceArrow.png'
import sign from "../../Images/signleSIgn.png"
import about1 from "../../Images/about1.png"
import about2 from "../../Images/about2.png"
import about3 from "../../Images/about3.png"
import LetsTalk from '../Shared/LetsTalk/LetsTalk';

const AboutUs = () => {
    return (
        <>
            {/* ======= about head start========= */}
            <div className='container d-lg-flex justify-content-between align-items-center my-5 py-md-5'>
                <div className='col-12 col-md-12 col-lg-6'>
                    <div className='service-banner'>
                        <h1>About Us</h1>
                        <h6 className=''>We make digital growth simple for small businesses. We consult with you to understand what stage your business is at, what digital problems you are currently facing, and how we can structure the scaling of your business into understandable steps with realistic timelines.
                        </h6>
                    </div>
                    <p className='navigation'>Home <img className='mx-3' src={right} alt="" /> Service</p>
                </div>
                <div className='col-12 col-md-12 col-lg-4'>
                    <div className='service-banner-img'>
                        <img className='img-fluid' src={aboutMain} alt="" />
                    </div>
                </div>
            </div>

            {/* =======about who are you start ========= */}
            <div className="aboutUs d-lg-flex  justify-content-between align-items-center container my-md-5 py-5">
                <div className="col-12 col-md-12 col-lg-4 mt-md-4 ">
                    <div>
                        <img className='img-fluid w-100 mb-sm-5' src={about1} alt="" />
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-7">
                    {/*  <h5> Services <span className='service-span'></span></h5> */}
                    <h2 className='mb-3 '>Who We Are?</h2>
                    <p>
                        Top It Ltd. is an advanced technology provider that implements revolutionary solutions based on private and public blockchains. Our blockchain concepts that we transform into enterprise solutions make it possible for businesses to reach their target market, help them surpass geographical boundaries, and connect over safe and secure networks.
                    </p>

                    <div className='my-3'>
                        <h6><img className='about-one img-fluid me-2' src={sign} alt="" /> Making lives easier</h6>
                        <h6><img className='about-one img-fluid me-2' src={sign} alt="" /> Get every solution right here</h6>
                        <h6><img className='about-one img-fluid me-2' src={sign} alt="" /> Innovation and creativity</h6>
                    </div>
                </div>
            </div>
            {/* =======about service 2 start ========= */}
            <div className="aboutUs d-lg-flex justify-content-between align-items-center container my-md-5 pb-5">
                <div className="col-12 col-md-12 col-lg-7">
                    {/*  <h5> Services <span className='service-span'></span></h5> */}
                    <h2 className='mb-4'>Keep in touch with the best performance of Information and Technology.</h2>
                    <p className='about-p'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida sit mauris enim, tincidunt varius. Quis diam gravida nunc, at faucibus vel sit sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida sit mauris enim, tincidunt varius. Quis diam gravida nunc, at faucibus vel sit sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida sit mauris enim, tincidunt varius. Quis diam gravida nunc, at faucibus vel sit sit amet.
                    </p>
                    <p className='about-p mt-3'>
                        consectetur adipiscing elit. Gravida sit mauris enim, tincidunt varius. Quis diam gravida nunc, at faucibus vel sit sit amet.Lorem ipsum dolor sit amet.
                    </p>
                </div>
                <div className="col-12 col-md-12 col-lg-4 mt-md-4 ">
                    <div>
                        <img className='img-fluid w-100' src={about1} alt="" />
                    </div>
                </div>
            </div>
            {/* =======about missions service 3 start ========= */}
            <div className="aboutUs d-lg-flex justify-content-between align-items-center container my-5 py-md-5">
                <div className="col-12 col-md-12 col-lg-7">
                    {/*  <h5> Services <span className='service-span'></span></h5> */}
                    <h2 className=' mb-4'>Mission</h2>
                    <p className='about-p'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida sit mauris enim, tincidunt varius. Quis diam gravida nunc, at faucibus vel sit sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida sit mauris enim, tincidunt varius. Quis diam gravida nunc, at faucibus vel sit sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida sit mauris enim, tincidunt varius. Quis diam gravida nunc, at faucibus vel sit sit amet.
                    </p>
                    <p className='about-p mt-3'>
                        consectetur adipiscing elit. Gravida sit mauris enim, tincidunt varius. Quis diam gravida nunc, at faucibus vel sit sit amet.Lorem ipsum dolor sit amet.
                    </p>
                </div>
                <div className="col-12 col-md-12 col-lg-4 mt-md-4 ">
                    <div>
                        <img className='img-fluid w-100' src={about2} alt="" />
                    </div>
                </div>
            </div>

            {/* =======vision service start ========= */}
            <div className="aboutUs d-lg-flex justify-content-between align-items-center container pb-5">
                <div className="col-12 col-md-12 col-lg-4 mt-md-4 ">
                    <div>
                        <img className='img-fluid w-100 mb-sm-5' src={about3} alt="" />
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-8">
                    {/*  <h5> Services <span className='service-span'></span></h5> */}
                    <h2 className='mb-3 '>Vision</h2>
                    <p className='about-p'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida sit mauris enim, tincidunt varius. Quis diam gravida nunc, at faucibus vel sit sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida sit mauris enim, tincidunt varius. Quis diam gravida nunc, at faucibus vel sit sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida sit mauris enim, tincidunt varius. Quis diam gravida nunc, at faucibus vel sit sit amet.
                    </p>
                    <p className=' mt-3'>
                        consectetur adipiscing elit. Gravida sit mauris enim, tincidunt varius. Quis diam gravida nunc, at faucibus vel sit sit amet.Lorem ipsum dolor sit amet.
                    </p>
                </div>
            </div>

            <div className='my-md-5 pb-md-5'>
                <LetsTalk></LetsTalk>
            </div>


        </>
    );
};

export default AboutUs;