import React, { useEffect } from 'react';
import "./ProjectPage.css"
import fullProject from "../../Images/fullProjectt.png"
import fullProject5 from "../../Images/555.png"
import project1 from "../../Images/projectpage1.png"
import project2 from "../../Images/projectpage2.png"
import project3 from "../../Images/projectpage3.png"
import project4 from "../../Images/projectpage4.png"
import sign from "../../Images/signleSIgn.png"
import color from "../../Images/color.png"
import a from "../../Images/a.png"
import projectShow from "../../Images/project11.png"
import projectShow2 from "../../Images/landingpage.jpeg"

import LetsTalk from '../Shared/LetsTalk/LetsTalk';

const ProjectPage = () => {
    /* ========= Page Load from top of the page code start ========= */
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    /* ========= Page Load from top of the page code end ========= */
    return (
        <>
            {/* =========== full project page header ========= */}

            <section>
                <div className='container d-lg-flex justify-content-between align-items-center py-lg-5 my-md-5 mb-md-0'>
                    <div className='col-12 col-md-12 col-lg-5'>
                        <div className='project-page-img'>
                            <img className='img-fluid rounded w-100' src={fullProject} alt="" />
                        </div>
                    </div>
                    <div className='col-12 col-md-12 col-lg-7 project-page ps-lg-5'>
                        <div className=''>
                            <h1>An E-Commerce Platform For Furniture</h1>
                            <h6>It is not an easy task to furnish a home with furniture. You all understand the pain of jumping from one store to another spending an excessive amount of time only to spot a few pieces of furniture that catch your attention. Shopping for furniture online may be a solution to your endless shopping journeys and allow you to evaluate numerous possibilities at any time and from any place.</h6>
                            <h6 className='mt-3'>

                                Keeping pace with the other industries, the furniture industry is also trying to go online. WoodCoast, a super furniture shop, too wanted to provide their customers with the awesome experience of digital space. Therefore, they came up with a digital space where users can buy their desired furniture in a simple and easy way.
                            </h6>
                        </div>
                    </div>

                </div>
            </section>

            {/* =========== project about ========= */}
            <section className='container'>
                <div className='project-page py-5 col-12 pe-lg-3'>
                    <h2>What is the project about?</h2>
                    <h6 className='mt-4'>Recently, the furniture shop owner of WoodCoast reached out to us with the desire of having a digital space for WoodCoast. They have a huge customer base and they understood their customers’ urge and that’s why they wanted to build a digital solution for this.</h6>
                    <h6 className='mt-4'>
                        They made us their partner in this journey. And in this client project, we tried to make a digital space for the WoodCoast which will ensure an awesome online experience and user-friendliness for their customers.</h6>
                </div>
            </section>
            {/* =========== how did we get started ========= */}
            <section>
                <div className='container d-lg-flex justify-content-between align-items-center py-lg-5 my-md-5'>
                    <div className='col-12 col-md-12 col-lg-5'>
                        <div className='project-page-img'>
                            <img className='img-fluid rounded w-100' src={fullProject5} alt="" />
                        </div>
                    </div>
                    <div className='col-12 col-md-12 col-lg-7  ps-lg-5'>
                        <div className='project-page'>
                            <h2 className='my-md-5'>How did we get started on the project and design their website?</h2>
                            <h6>At first, we interviewed our stakeholders and made a survey of the users who are interested in buying furniture online rather than offline. After a looooong discussion among our team members in the ideation phase, we defined the basic feature list for WoodCoast. We took the following features for the initial start.</h6>
                            <h6 className='mt-3'>
                                At first, we interviewed our stakeholders and made a survey of the users who are interested in buying furniture online rather than offline. After a looooong discussion among our team members in the ideation phase, we defined the basic feature list for WoodCoast. We took the following features for the initial start.
                            </h6>
                        </div>
                    </div>
                </div>
            </section>
            {/* =========== image section start ========= */}
            <section className='container d-md-flex'>
                <div className="d-flex justify-content-between flex-wrap pt-5 mb-md-5">
                    <div className=" photo-frame col-12 col-md-6 pe-md-4 pe-sm-0 mb-5">
                        <div className='photo  '>
                            <img className='img-fluid w-100' src={project1} alt="" />

                        </div>
                    </div>
                    <div className=" photo-frame col-12 col-md-6 ps-md-4 mb-5">
                        <div className='photo '>
                            <img className='img-fluid w-100' src={project2} alt="" />
                        </div>
                    </div>
                    <div className=" photo-frame col-12 col-md-6 pe-md-4 mb-5">
                        <div className='photo '>
                            <img className='img-fluid w-100' src={project3} alt="" />
                        </div>
                    </div>
                    <div className=" photo-frame col-12 col-md-6 ps-md-4">
                        <div className='photo '>
                            <img className='img-fluid w-100' src={project4} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            {/*============= Features to be added =========== */}
            <section className='container'>
                <div className="service-identity d-lg-flex justify-content-between align-items-center container pb-5">
                    <div className="col-12 col-md-12 col-lg-10">
                        <h2>Features to be added</h2>
                        <div className='my-3'>
                            <div className='d-flex'>
                                <img className='img-fluid  me-2 my-image' src={sign} alt="" />
                                <h6> Offer and discounts with similar products.</h6>
                            </div>
                            <div className='d-flex'>
                                <img className='img-fluid  me-2 my-image' src={sign} alt="" />
                                <h6>Live chat with the shop owner</h6>
                            </div>
                            <div className='d-flex'>
                                <img className='img-fluid  me-2 my-image' src={sign} alt="" />
                                <h6>Shopping Cart</h6>
                            </div>
                            <div className='d-flex'>
                                <img className='img-fluid  me-2 my-image' src={sign} alt="" />
                                <h6>Detailed Product Pages</h6>
                            </div>
                            <div className='d-flex'>
                                <img className='img-fluid  me-2 my-image' src={sign} alt="" />
                                <h6>Customer Reviews</h6>
                            </div>

                            <div className='d-flex'>
                                <img className='img-fluid  me-2 my-image' src={sign} alt="" />
                                <h6>Along with the feature list, we’ve made the user journey, user flow, and user persona for the WoodCoast before jumping into the design phase.</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*============= Detail of the Design phase =========== */}
            <section className='container detail py-5'>
                <div className="col-12 col-md-10 col-lg-11">
                    <h4>Detail of the Design phase</h4>
                    <p>Before initiating the final design, we made a paper sketch prototype to see how our enlisted features will show up in the final design. A paper prototype is really a great thing before starting any high-fidelity design. With the paper prototype, all parties involved with a design can receive a great & proper concept of the final output.
                    </p>
                </div>
            </section>

            {/*============= colors =========== */}
            <section className='container'>
                <div className="detail col-12 col-md-9 col-lg-8 m-auto">
                    <h4 className='text-center mb-3'>The Colors</h4>
                    <p className='text-center'>For this project we collaborated closely with our clients at Rainmaking. They had already carried out extensive user research, but were relying on us to bring their vision to life and introduce a fresh perspective from outside their organization.</p>
                    <div className=''>
                        <img className='my-5 img-fluid' src={color} alt="" />
                    </div>
                </div>
            </section>

            {/*============= A text =========== */}

            <section className='container py-5 '>
                <div className="d-lg-flex">
                    <div className='col-12 col-md-12 col-lg-6 text-section'>
                        <h2>The Typography</h2>
                        <h6>123456789 <br /> <span>Aa</span> <span>Bb </span> <span>Cc</span> <span>Dd</span></h6>
                        <h1>A B C</h1>
                    </div>
                    <div className='col-12 col-md-12 col-lg-6'>
                        <img className='img-fluid w-100' src={a} alt="" />
                    </div>
                </div>
            </section>

            {/*============= show project =========== */}
            <section className='my-5 pb-5'>
                <div className='show-photo'>
                    <img className='img-fluid' src={projectShow} alt="" />
                </div>
            </section>

            {/*============= show project =========== */}
            <section className='my-5 pb-5 container'>
                <div className='project-last-photo'>
                    <img className='img-fluid' src={projectShow2} alt="" />
                </div>
            </section>



            <LetsTalk></LetsTalk>
        </>
    );
};

export default ProjectPage;