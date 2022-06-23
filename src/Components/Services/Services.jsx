import React from 'react';
import { Link } from 'react-router-dom';
import "./Services.css"
import seviceImage from "../../Images/servicesHead.png"
import serviceName1 from "../../Images/serviceName1.png"
import serviceName2 from "../../Images/serviceName2.png"
import serviceName3 from "../../Images/serviceName3.png"
import serviceName4 from "../../Images/serviceName4.png"
import serviceName5 from "../../Images/serviceName5.png"
import serviceName6 from "../../Images/serviceName6.png"

import right from "../../Images/rightServiceArrow.png"
import serviceIdentity from "../../Images/serviceIdentity.png"
import sign from "../../Images/sign.png"
import image2 from "../../Images/02.png"
import image3 from "../../Images/03.png"
import image4 from "../../Images/04.png"
import image5 from "../../Images/05.png"
import image6 from "../../Images/06.png"
import { useState } from 'react';
import { useEffect } from 'react';


const Services = () => {
    const [servicesn, setServicesn] = useState([])
    useEffect(() => {
        fetch('./Services.JSON')
            .then(res => res.json())
            .then(data => setServicesn(data))
    }, [])

    return (
        <>
            <div className='container d-lg-flex justify-content-between align-items-center my-5'>
                <div className='col-12 col-md-12 col-lg-5'>
                    <div className='service-banner'>
                        <h1>We help our clients to recognize and develop their own identity</h1>
                        <h6>The recipe to do that is by focusing and deeply understanding the single elements of a new project to gradually make them part of an inspiring seamless whole, add creativity to taste!</h6>
                    </div>
                    <p className='navigation'>Home <img className='mx-3' src={right} alt="" /> Service</p>
                </div>
                <div className='col-12 col-md-12 col-lg-4'>
                    <div className='service-banner-img'>
                        <img className='img-fluid' src={seviceImage} alt="" />
                    </div>
                </div>
            </div>

            {/*============= service item start =========== */}
            <div className='container mt-5 d-flex flex-wrap py-5 px-sm-2 px-md-5 '>
                <div className='col-12 col-md-6 col-lg service-page-items my-4'>
                    <a href="#serviceOne" className='text-decoration-none'>
                        <div>
                            <img src={serviceName1} alt="" />
                        </div>
                        <h4>Branding & Identity
                        </h4>
                    </a>
                </div>
                <div className='col-12 col-md-6 col-lg service-page-items my-4'>
                    <a href="#serviceTwo" className='text-decoration-none'>
                        <div>
                            <img src={serviceName2} alt="" />
                        </div>
                        <h4>SAAS Development
                        </h4>
                    </a>
                </div>
                <div className='col-12 col-md-6 col-lg service-page-items my-4'>
                    <a href="#serviceThree" className='text-decoration-none'>
                        <div>
                            <img src={serviceName3} alt="" />
                        </div>
                        <h4>Graphic Design

                        </h4>
                    </a>
                </div>
                <div className='col-12 col-md-6 col-lg service-page-items my-4'>
                    <a href="#serviceFour" className='text-decoration-none'>
                        <div>
                            <img src={serviceName4} alt="" />
                        </div>
                        <h4>Web Design & Development
                        </h4>
                    </a>
                </div>
                <div className='col-12 col-md-6 col-lg service-page-items my-4'>
                    <a href="#serviceFive" className='text-decoration-none'>
                        <div>
                            <img src={serviceName5} alt="" />
                        </div>
                        <h4>Affiliate Marketing

                        </h4>
                    </a>
                </div>
                <div className='col-12 col-md-6 col-lg service-page-items my-4'>
                    <a href="#serviceSix" className='text-decoration-none'>
                        <div>
                            <img src={serviceName6} alt="" />
                        </div>
                        <h4>SEO & Digital Marketing
                        </h4>
                    </a>
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
            </div>

            {/*============= service identity1 =========== */}
            <div id='serviceOne' className="service-identity d-lg-flex justify-content-between align-items-center container mb-5 pb-5">
                <div className="col-12 col-md-12 col-lg-6">
                    <h5> Services <span className='service-span'></span></h5>
                    <h2>Branding & Identity</h2>
                    <p>Brand Identity is who you are as a business or organization, and that statement needs to be strong and clear, resonating throughout all aspects of your business decisions. Whether you’re launching a new brand, or in need of a fresh update, we create a defined awareness between you and your consumer, for a lasting impression. Aumcore has launched brands from birth including Logo Design, Voice Development, Copywriting, and more. As a 360˚ marketing agency, our specialty is providing you with the full spectrum of services you’ll require to create or refresh an impressive brand Identity package.
                    </p>

                    <div className='my-3'>
                        <h6><img className='img-fluid me-2' src={sign} alt="" /> Naming</h6>
                        <h6><img className='img-fluid me-2' src={sign} alt="" /> Logo Design</h6>
                        <h6><img className='img-fluid me-2' src={sign} alt="" /> Brand identity system</h6>
                        <h6><img className='img-fluid me-2' src={sign} alt="" /> Marketing graphics</h6>
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
                <div className="col-12 col-md-12 col-lg-6">
                    <h5> Services <span className='service-span'></span></h5>
                    <h2>SAAS Development</h2>
                    <p>We have experts who are proficient in the technologies needed to build a SaaS solution for your business, and we have a good understanding of what real-world challenges SaaS product development services can solve for you and your customers. What we provide is well-organized and configurable software. Your end users can access this software from anywhere with only a few clicks. And you can start saving on hardware, servers, and in-house IT specialists without compromising on user experience and functionality.
                    </p>


                    <div className='my-3'>
                        <h6><img className='img-fluid me-2' src={sign} alt="" /> Naming</h6>
                        <h6><img className='img-fluid me-2' src={sign} alt="" /> Logo Design</h6>
                        <h6><img className='img-fluid me-2' src={sign} alt="" /> Brand identity system</h6>
                        <h6><img className='img-fluid me-2' src={sign} alt="" /> Marketing graphics</h6>
                    </div>
                </div>
            </div>

            {/*============= service identity3 =========== */}
            <div id='serviceThree' className="service-identity d-lg-flex justify-content-between align-items-center container mb-5 pb-5">
                <div className="col-12 col-md-12 col-lg-6">
                    <h5> Services <span className='service-span'></span></h5>
                    <h2>Graphic Design</h2>
                    <p>
                        Graphics Design is one of the strongest media for exposing your thoughts and imaginations. You can decorate the whole world with millions of unique images that you love to imagine. The TOP IT LTD is offering you the best courses in Graphics Design with world-class skills. Learn it with your passion and make you successful with artistic designs.


                    </p>

                    <div className='my-3'>
                        <h6><img className='img-fluid me-2' src={sign} alt="" /> Naming</h6>
                        <h6><img className='img-fluid me-2' src={sign} alt="" /> Logo Design</h6>
                        <h6><img className='img-fluid me-2' src={sign} alt="" /> Brand identity system</h6>
                        <h6><img className='img-fluid me-2' src={sign} alt="" /> Marketing graphics</h6>
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
                <div className="col-12 col-md-12 col-lg-6">
                    <h5> Services <span className='service-span'></span></h5>
                    <h2>Web Design & Development</h2>
                    <p>
                        Do you have a passion for designing websites as you want? Growing up with the advantages of the internet and information technology, Web Design has been considered the part and parcel of online marketing and branding all over the world. To be skilled, you need world-class training to make true your dreams of creating unique designs with the TOP IT LTD. Learn, customize and design every website as you like to see.


                    </p>

                    <div className='my-3'>
                        <h6><img className='img-fluid me-2' src={sign} alt="" /> Naming</h6>
                        <h6><img className='img-fluid me-2' src={sign} alt="" /> Logo Design</h6>
                        <h6><img className='img-fluid me-2' src={sign} alt="" /> Brand identity system</h6>
                        <h6><img className='img-fluid me-2' src={sign} alt="" /> Marketing graphics</h6>
                    </div>
                </div>
            </div>

            {/*============= service identity6 =========== */}
            <div id='serviceFive' className="service-identity d-lg-flex justify-content-between align-items-center container mb-5 pb-5">
                <div className="col-12 col-md-12 col-lg-6">
                    <h5> Services <span className='service-span'></span></h5>
                    <h2>Affiliate Marketing</h2>
                    <p>
                        The traditional marketing strategies are now being replaced by Digital Marketing because of the fast-growing internet, information technology and social media of the world. Online Marketing and Branding of products and services to the target audiences greatly depend on Digital Marketing. The TOP IT LTD is offering you the best training courses on it. Make you a digital marketing expert, bring massive success in your marketing strategy for branding.


                    </p>

                    <div className='my-3'>
                        <h6><img className='img-fluid me-2' src={sign} alt="" /> Naming</h6>
                        <h6><img className='img-fluid me-2' src={sign} alt="" /> Logo Design</h6>
                        <h6><img className='img-fluid me-2' src={sign} alt="" /> Brand identity system</h6>
                        <h6><img className='img-fluid me-2' src={sign} alt="" /> Marketing graphics</h6>
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
                <div className="col-12 col-md-12 col-lg-6">
                    <h5> Services <span className='service-span'></span></h5>
                    <h2>SEO & Digital Marketing</h2>
                    <p>
                        Digital Marketing is such a marketing strategy in which business is run through using various digital platforms not using the traditional marketing tools and media. As all types of digital tools and media are used, the sales and profits of services and products are more than that of traditional marketing. Search Engine Optimization (SEO) is the most important practical strategy for the purpose of ranking websites in any Search Engine like Google, Bing, DuckDuckGo and so on.


                    </p>

                    <div className='my-3'>
                        <h6><img className='img-fluid me-2' src={sign} alt="" /> Naming</h6>
                        <h6><img className='img-fluid me-2' src={sign} alt="" /> Logo Design</h6>
                        <h6><img className='img-fluid me-2' src={sign} alt="" /> Brand identity system</h6>
                        <h6><img className='img-fluid me-2' src={sign} alt="" /> Marketing graphics</h6>
                    </div>
                </div>
            </div>


            {/*============= Let's Talk  =========== */}
            <div className='talk'>
                <div className=" container py-5 my-5 col-10 col-md-8 col-lg-6">
                    <h1>Let’s talk about the Project!</h1>
                    <p className='pb-4'>Our clients get the best results when they have our team dedicated to their business for extended periods of time.</p>
                    <Link to="/contact" className="portfolio-last-button">Let’s Talk</Link>
                </div>
            </div>








        </>
    );
};

export default Services;