import React from 'react';
import { Link } from 'react-router-dom';
import "./Services.css"
import seviceImage from "../../Images/servicesHead.png"
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
                        <h1>Best solutions for your business</h1>
                        <h6>A quick view of industry specific problems solved with design by the awesome team at Keystroke.</h6>
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
                {servicesn.map(servicen =>
                    <div key={servicen.id} className="col-12 col-md-6 col-lg service-page-items my-4">
                        <div className='img-back'>
                            <img className='img-fluid' src={servicen.image} alt="" />
                        </div>
                        <h4>{servicen.name}</h4>

                    </div>)}
            </div>

            {/*============= service identity1 =========== */}
            <div className="service-identity d-lg-flex justify-content-between align-items-center container mb-5 pb-5">
                <div className="col-12 col-md-12 col-lg-6">
                    <h5> Services <span className='service-span'></span></h5>
                    <h2>Branding & Identity</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sem tempor consequat nulla felis pharetra neque vivamus est. Diam eget sit mauris quam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sem tempor consequat nulla felis pharetra neque vivamus est. Diam eget sit mauris quam.</p>

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
            <div className="service-identity d-lg-flex justify-content-between align-items-center container my-5 py-5">
                <div className="col-12 col-md-12 col-lg-5 mb-md-5">
                    <div>
                        <img className='img-fluid ' src={image2} alt="" />
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-6">
                    <h5> Services <span className='service-span'></span></h5>
                    <h2>SAAS Development</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sem tempor consequat nulla felis pharetra neque vivamus est. Diam eget sit mauris quam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sem tempor consequat nulla felis pharetra neque vivamus est. Diam eget sit mauris quam.
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
            <div className="service-identity d-lg-flex justify-content-between align-items-center container mb-5 pb-5">
                <div className="col-12 col-md-12 col-lg-6">
                    <h5> Services <span className='service-span'></span></h5>
                    <h2>Graphic Design</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sem tempor consequat nulla felis pharetra neque vivamus est. Diam eget sit mauris quam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sem tempor consequat nulla felis pharetra neque vivamus est. Diam eget sit mauris quam.</p>

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
            <div className="service-identity d-lg-flex justify-content-between align-items-center container my-5 py-5">
                <div className="col-12 col-md-12 col-lg-5 mb-md-5">
                    <div>
                        <img className='img-fluid ' src={image4} alt="" />
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-6">
                    <h5> Services <span className='service-span'></span></h5>
                    <h2>Web Design & Development</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sem tempor consequat nulla felis pharetra neque vivamus est. Diam eget sit mauris quam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sem tempor consequat nulla felis pharetra neque vivamus est. Diam eget sit mauris quam.
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
            <div className="service-identity d-lg-flex justify-content-between align-items-center container mb-5 pb-5">
                <div className="col-12 col-md-12 col-lg-6">
                    <h5> Services <span className='service-span'></span></h5>
                    <h2>Affiliate Marketing</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sem tempor consequat nulla felis pharetra neque vivamus est. Diam eget sit mauris quam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sem tempor consequat nulla felis pharetra neque vivamus est. Diam eget sit mauris quam.</p>

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
            <div className="service-identity d-lg-flex justify-content-between align-items-center container my-5 py-5">
                <div className="col-12 col-md-12 col-lg-5 mb-md-5">
                    <div>
                        <img className='img-fluid ' src={image6} alt="" />
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-6">
                    <h5> Services <span className='service-span'></span></h5>
                    <h2>SEO & Digital Marketing</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sem tempor consequat nulla felis pharetra neque vivamus est. Diam eget sit mauris quam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sem tempor consequat nulla felis pharetra neque vivamus est. Diam eget sit mauris quam.
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