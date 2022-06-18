import React from 'react';
import "./Portfolio.css"
import PortfolioImage from "../../Images/portfolioImage.png"
import right from "../../Images/rightServiceArrow.png"
import john from "../../Images/john.png"
import reviwImage from "../../Images/portfolioReview.png"
import leftarrow from "../../Images/left arrow.png"
import rightarrow from "../../Images/111.png"
import { Tabs } from 'react-bootstrap';
import { Tab } from 'bootstrap';
import Showall from './Showall/Showall';
import Branding from './Branding/Branding';
import Development from './Development/Development';
import GraphicDesign from './GraphicDesign/GraphicDesign';
import SEO from './SEO/SEO';

const Portfolio = () => {
    return (
        <>
            <div className='container d-lg-flex justify-content-between align-items-center my-5'>
                <div className='col-12 col-md-12 col-lg-5'>
                    <div className='service-banner'>
                        <h1>Best solutions for your business</h1>
                        <h6>A quick view of industry specific problems solved with design by the awesome team at Keystroke.</h6>
                    </div>
                    <p className='navigation'>Home <img className='mx-3' src={right} alt="" /> Portfolio</p>
                </div>
                <div className='col-12 col-md-12 col-lg-4'>
                    <div className='service-banner-img'>
                        <img className='img-fluid' src={PortfolioImage} alt="" />
                    </div>
                </div>
            </div>

            {/* ========== tab section start =========== */}
            <div className='container mt-5'>
                <div className=''>
                    <Tabs
                        defaultActiveKey="show-all"
                        transition={false}
                        id="noanim-tab-example"
                        className="my-5"
                    >
                        <Tab className="" eventKey="show-all" title="Show All">
                            <Showall />
                        </Tab>
                        <Tab className="" eventKey="branding" title="Branding">
                            <Branding />
                        </Tab>
                        <Tab className="" eventKey="development" title=" Development">
                            <Development />
                        </Tab>
                        <Tab eventKey="Graphic-Design" title="Graphic Design">
                            <GraphicDesign />
                        </Tab>
                        <Tab className="" eventKey="Marketing" title="Marketing">
                            <GraphicDesign />
                        </Tab>
                        <Tab className="" eventKey="SEO" title="SEO">
                            <SEO />
                        </Tab>
                    </Tabs>
                </div>
                <button className='latest-project-button my-5'>View All Projects</button>
            </div>

            {/* ========== Portfolio Review section start =========== */}
            <div className=' my-5 py-md-4 review-start'>
                <div className='container protfolio-head mb-4'>
                    <div className='w-md-50'>
                        <h4 className="latest-head">What Our Customer<br /> Say About Us</h4>
                    </div>
                    <div>
                        <img className='leftarrow' src={leftarrow} alt="" />
                        <img className='rightarrow' src={rightarrow} alt="" />
                    </div>
                </div>

                <div className='container mt-md-5'>
                    <div className=' m-auto d-lg-flex align-items-center'>
                        <div className='col-md-12 col-lg-8 col-12'>
                            <div className='star-review pe-md-5 '>
                                <p>4.00 <i className=" icon-custom fas fa-star"> </i>
                                    <i className=" icon-custom fas fa-star"></i>
                                    <i className=" icon-custom fas fa-star"> </i>
                                    <i className=" icon-custom fas fa-star"></i>
                                    <i className=" icon-custom fas fa-star"></i></p>
                                <h4 className='text-review'>
                                    ”Lorem ipsum dolor sit amet, ut consectetur adipiscing elit. In urna, non nisl tincidunt ut elementum st turpis.“
                                </h4>
                                <div className='user pt-3'>
                                    <div>
                                        <img src={john} alt="" />
                                    </div>
                                    <div>
                                        <h6>Jane Cooper</h6>
                                        <p>User Interface Design</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='col-md-12 col-lg-4 col-12'>
                            <img className='review-left-image' src={reviwImage} alt="" />

                        </div>
                    </div>
                </div>
            </div>

            {/* ========== Portfolio last section start =========== */}
            <div className='portfolio-last mb-5 py-5'>
                <div className='container'>
                    <div className='row justify-content-between align-items-center'>
                        <div className='col-12 col-md-12 col-lg-7 portfolio-talk'>
                            <h2>Let’s talk about the Project!</h2>
                            <p>Our clients get the best results when they have our team dedicated to their business for extended periods of time.</p>
                        </div>
                        <div className='col-12 col-md-12 col-lg-3 text-align-right'>
                            <button className='portfolio-last-button'>Let’s Talk</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );

};

export default Portfolio;