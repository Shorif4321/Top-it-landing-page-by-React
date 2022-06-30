import React from 'react';/* 
import { Link } from 'react-router-dom'; */
import "./Services.css"
import seviceImage from "../../Images/servicesHead.png"
import serviceName1 from "../../Images/serviceName1.png"
import serviceName2 from "../../Images/serviceName2.png"
import serviceName3 from "../../Images/serviceName3.png"
import serviceName4 from "../../Images/serviceName4.png"
import serviceName5 from "../../Images/serviceName5.png"
import serviceName6 from "../../Images/serviceName6.png"
/* 
import right from "../../Images/rightServiceArrow.png" */
import serviceIdentity from "../../Images/serviceIdentity.png"
import sign from "../../Images/sign.png"
import image2 from "../../Images/02.png"
import image3 from "../../Images/03.png"
import image4 from "../../Images/04.png"
import image5 from "../../Images/05.png"
import image6 from "../../Images/06.png"
import { useState } from 'react';
import { useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';


const Services = () => {
    /* ========= Page Load from top of the page code start ========= */
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    /* ========= Page Load from top of the page code end ========= */

    const [servicesn, setServicesn] = useState([])
    useEffect(() => {
        fetch('./Services.JSON')
            .then(res => res.json())
            .then(data => setServicesn(data))
    }, [])

    return (
        <>

            {/*============= service item start =========== */}
            <div className='container mt-5 d-flex flex-wrap py-5 px-sm-2 px-md-5 '>
                <div className='col-12 col-md-6 col-lg service-page-items my-4' data-aos="flip-left"
                    data-aos-duration="1000">
                    <a href="#serviceOne" className='text-decoration-none'>
                        <div>
                            <img src={serviceName1} alt="" />
                        </div>
                        <h4>Branding & Identity
                        </h4>
                    </a>
                </div>
                <div className='col-12 col-md-6 col-lg service-page-items my-4' data-aos="flip-left"
                    data-aos-duration="1000">
                    <a href="#serviceTwo" className='text-decoration-none'>
                        <div>
                            <img src={serviceName2} alt="" />
                        </div>
                        <h4>SAAS Development
                        </h4>
                    </a>
                </div>
                <div className='col-12 col-md-6 col-lg service-page-items my-4' data-aos="flip-left"
                    data-aos-duration="1000">
                    <a href="#serviceThree" className='text-decoration-none'>
                        <div>
                            <img src={serviceName3} alt="" />
                        </div>
                        <h4>Graphic Design

                        </h4>
                    </a>
                </div>
                <div className='col-12 col-md-6 col-lg service-page-items my-4' data-aos="flip-left"
                    data-aos-duration="1000">
                    <a href="#serviceFour" className='text-decoration-none'>
                        <div>
                            <img src={serviceName4} alt="" />
                        </div>
                        <h4>Web Design & Development
                        </h4>
                    </a>
                </div>
                <div className='col-12 col-md-6 col-lg service-page-items my-4' data-aos="flip-left"
                    data-aos-duration="1000">
                    <a href="#serviceFive" className='text-decoration-none'>
                        <div>
                            <img src={serviceName5} alt="" />
                        </div>
                        <h4>Affiliate Marketing

                        </h4>
                    </a>
                </div>
                <div className='col-12 col-md-6 col-lg service-page-items my-4' data-aos="flip-left"
                    data-aos-duration="1000">
                    <a href="#serviceSix" className='text-decoration-none'>
                        <div>
                            <img src={serviceName6} alt="" />
                        </div>
                        <h4>SEO & Digital Marketing
                        </h4>
                    </a>
                </div>
            </div>


            <div id='service' className='container d-lg-flex justify-content-between align-items-center my-5' data-aos="fade-up"
                data-aos-duration="500">
                <div className='col-12 col-md-12 col-lg-5'>
                    <div className='service-banner' data-aos="fade-up"
                        data-aos-duration="1000">
                        <h4 className='discover-text'>Discover own Identity with New Experience</h4>
                        <h6>Vast advantage of technology has opened a new window of new oppertunirties. Attach your dreams with magical touch of Infomation and Technoplogy and reach at the last corner of the world with the best outcome of your own business and services. We are being committed standing by 24/7 only for you, only for your brand & business.</h6>
                    </div>
                    {/*   <p className='navigation'>Home <img className='mx-3' src={right} alt="" /> Service</p> */}
                </div>
                <div className='col-12 col-md-12 col-lg-4'>
                    <div className='service-banner-img'>
                        <img className='img-fluid' src={seviceImage} alt="" />
                    </div>
                </div>
            </div>




            {/*      {servicesn.map(servicen =>
                    <div key={servicen.id} className="col-12 col-md-6 col-lg service-page-items my-4">
                        <div href="#serviceOne">
                            <div className='img-back'>
                                <img className='img-fluid' src={servicen.image} alt="" />
                            </div>
                            <h4>{servicen.name}</h4>
                        </div>

                    </div>
                )} */}

            {/*============= service identity1 =========== */}
            <div id='serviceOne' className="service-identity d-lg-flex justify-content-between align-items-center container">
                <div className="col-12 col-md-12 col-lg-6" data-aos="zoom-out-down"
                    data-aos-duration="1000">
                    <h5> Services <span className='service-span'></span></h5>
                    <h2>Branding & Identity</h2>
                    <p>“Your Brand,Your Dream” is the main motto of your business. Creating brand awareness among the people of the local market and international markert is is definitely challenging But the challenge can not stop branding. The more challenge you face in branding, the more awareness will seen among the clients and customers you have already targeted.
                    </p>
                    <p className='mt-3'>Don’t be much worried because the topitltd has a group of marketing experts who are dedicated to creating the outcome of making your branding and identity. Grow up your brands and identity with the extreme efforts of the topitltd.
                    </p>

                    <div className='my-3'>
                        <h6><img className='img-fluid me-2' src={sign} alt="" /> Increase Brand Awareness</h6>
                        <h6><img className='img-fluid me-2' src={sign} alt="" /> Brand Positioning </h6>
                        <h6><img className='img-fluid me-2' src={sign} alt="" /> Style Guide</h6>
                        <h6><img className='img-fluid me-2' src={sign} alt="" /> Social Media Branding</h6>
                    </div>
                </div>

                <div className="col-12 col-md-12 col-lg-5 mt-md-5 ">
                    <div>
                        <img className='img-fluid ' src={serviceIdentity} alt="" />
                    </div>
                </div>
            </div>


            {/*============= service identity2 =========== */}
            <div id='serviceTwo' className="service-identity d-lg-flex justify-content-between align-items-center container my-5 py-5">
                <div className="col-12 col-md-12 col-lg-5 mb-md-5">
                    <div>
                        <img className='img-fluid ' src={image2} alt="" />
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-6" data-aos="zoom-out-down"
                    data-aos-duration="1000">
                    <h5> Services <span className='service-span'></span></h5>
                    <h2>SAAS Development</h2>
                    <p>Software as a service (or SaaS) is a way of delivering applications over the Internet—as a service. Instead of installing and maintaining software, you simply access it via the Internet, freeing yourself from complex software and hardware management.
                    </p>
                    <p className='mt-3'>SaaS applications are sometimes called Web-based software, on-demand software, or hosted software. Whatever the name, SaaS applications run on a SaaS provider’s servers. The provider manages access to the application, including security, availability, and performance.
                    </p>


                    <div className='my-3'>





                        <h6><img className='img-fluid me-2' src={sign} alt="" /> Technology Stack Choice</h6>
                        <h6><img className='img-fluid me-2' src={sign} alt="" /> Database design</h6>
                        <h6><img className='img-fluid me-2' src={sign} alt="" /> Third-Party Services Integration</h6>
                        <h6><img className='img-fluid me-2' src={sign} alt="" /> Security audit</h6>
                    </div>
                </div>
            </div>

            {/*============= service identity3 =========== */}
            <div id='serviceThree' className="service-identity d-lg-flex justify-content-between align-items-center container mb-5 pb-5">
                <div className="col-12 col-md-12 col-lg-6" data-aos="zoom-out-down"
                    data-aos-duration="1000">
                    <h5> Services <span className='service-span'></span></h5>
                    <h2>Graphic Design</h2>
                    <p>
                        Graphics Designs is one of the strongest media of exposing thousands of words in a picture. It helps to make your brand how much colorful and visible to the people. We have teams of designers that are really amazing and productive. Innovative, unique and eye-catching designs with high resolution always amplifiers the values of your brands.
                    </p>
                    <p className='mt-3'>
                        When you are thinking of establishing your own business with the colorful design, you can choose the color you like  most. The graphic teams of the company are so dedicate and bring out the best designs with best color combination.
                    </p>

                    <div className='my-3'>





                        <h6><img className='img-fluid me-2' src={sign} alt="" /> Unique Design</h6>
                        <h6><img className='img-fluid me-2' src={sign} alt="" /> Best Color Combination</h6>
                        <h6><img className='img-fluid me-2' src={sign} alt="" /> More Re-Touch</h6>
                        <h6><img className='img-fluid me-2' src={sign} alt="" /> Attractive Design Layout</h6>
                    </div>
                </div>

                <div className="col-12 col-md-12 col-lg-5 mt-md-5 ">
                    <div>
                        <img className='img-fluid ' src={image3} alt="" />
                    </div>
                </div>
            </div>

            {/*============= service identity4 =========== */}
            <div id='serviceFour' className="service-identity d-lg-flex justify-content-between align-items-center container my-5 py-5">
                <div className="col-12 col-md-12 col-lg-5 mb-md-5">
                    <div>
                        <img className='img-fluid ' src={image4} alt="" />
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-6" data-aos="zoom-out-down"
                    data-aos-duration="1000">
                    <h5> Services <span className='service-span'></span></h5>
                    <h2>Web Design & Development</h2>
                    <p>
                        A professional, eye-catching, responsive and user-friendly website must bring your brand to life. Your website is just like a showcase where you will put everything about your brand or business so that all the potential customers and clients can interact as they like. Start a good business journey with your customers and clients with just a click. Are you ready?
                    </p>

                    <div className='my-3'>
                        <h6><img className='img-fluid me-2' src={sign} alt="" /> Responsive
                        </h6>
                        <h6><img className='img-fluid me-2' src={sign} alt="" /> Speed Optimized</h6>
                        <h6><img className='img-fluid me-2' src={sign} alt="" /> Brand Consistent</h6>
                        <h6><img className='img-fluid me-2' src={sign} alt="" /> Cross-Browser Compatible</h6>
                    </div>
                </div>
            </div>

            {/*============= service identity6 =========== */}
            <div id='serviceFive' className="service-identity d-lg-flex justify-content-between align-items-center container mb-5 pb-5">
                <div className="col-12 col-md-12 col-lg-6" data-aos="zoom-out-down"
                    data-aos-duration="1000">
                    <h5> Services <span className='service-span'></span></h5>
                    <h2>Affiliate Marketing</h2>
                    <p>
                        Affiliate Marketing is such a type of marketing where a marketer or publisher can generate a lot of revenue and commission on a specific service or product without any investment. This marketing strategy is getting popular in Bangladesh and other countries of the world. Amazon, Alibaba, and Daraz are the most popular and biggest affiliate sites and you can generate a lot of revenue and commission working at home. But how?
                    </p>

                    <div className='my-3'>






                        <h6><img className='img-fluid me-2' src={sign} alt="" /> Quality Affiliates</h6>
                        <h6><img className='img-fluid me-2' src={sign} alt="" /> Products That Provide Value to Customers</h6>
                        <h6><img className='img-fluid me-2' src={sign} alt="" /> Attention to Key Performance Indicators </h6>
                        <h6><img className='img-fluid me-2' src={sign} alt="" /> A Thriving Affiliate Community</h6>
                    </div>
                </div>

                <div className="col-12 col-md-12 col-lg-5 mt-md-5 ">
                    <div>
                        <img className='img-fluid ' src={image5} alt="" />
                    </div>
                </div>
            </div>
            {/*============= service identity4 =========== */}
            <div id='serviceSix' className="service-identity d-lg-flex justify-content-between align-items-center container my-5 py-5">
                <div className="col-12 col-md-12 col-lg-5 mb-md-5">
                    <div>
                        <img className='img-fluid ' src={image6} alt="" />
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-6" data-aos="zoom-out-down"
                    data-aos-duration="1000">
                    <h5> Services <span className='service-span'></span></h5>
                    <h2>SEO & Digital Marketing</h2>
                    <p>
                        Digital Marketing is such a marketing strategy in which business is run through using various digital platforms not using the traditional marketing tools and media. As all types of digital tools and media are used, the sales and profits of service and products are more than that of traditional marketing
                    </p>
                    <p className='mt-3'>
                        When you are thinking of making your own branding and spreading out both nationally and internationally, you must do it now by Digital Marketing because the traditional marketing is definitely bounded only in the some specific local areas. Grow up business in the next level by the touch of digital platforms and make more profits as you expect. Don’t be late, start now.
                    </p>

                    <div className='my-3'>
                        <h6><img className='img-fluid me-2' src={sign} alt="" /> Online advertising</h6>
                        <h6><img className='img-fluid me-2' src={sign} alt="" /> Search Engine Optimization</h6>
                        <h6><img className='img-fluid me-2' src={sign} alt="" /> Online Content and Blogging</h6>
                        <h6><img className='img-fluid me-2' src={sign} alt="" /> Email and Online Newsletter Marketing</h6>
                    </div>
                </div>
            </div>


            {/*============= Let's Talk  =========== */}
            <div className='talk'>
                <div className=" container py-5 col-10 col-md-8 col-lg-6">
                    <h1>Let’s talk about the Project!</h1>
                    <p className='pb-4'>Our clients get the best results when they have our team dedicated to their business for extended periods of time.</p>
                    <HashLink to="/contact/#contact" className="portfolio-last-button">Let’s Talk</HashLink>
                </div>
            </div>

        </>
    );
};

export default Services;