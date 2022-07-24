import React, { useEffect } from 'react';
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
import LetsTalk from '../Shared/LetsTalk/LetsTalk';
import Review from '../Home/Review/Review';

const Portfolio = () => {
    /* ========= Page Load from top of the page code start ========= */
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    /* ========= Page Load from top of the page code end ========= */
    return (
        <>
            <div id='portfolio' className='container d-lg-flex justify-content-between align-items-center my-5' data-aos="fade-up"
                data-aos-duration="500">
                <div className='col-12 col-md-12 col-lg-5' data-aos="fade-up"
                    data-aos-duration="1000">
                    <div className='service-banner' >
                        <h4>Best solutions for your business</h4>
                        <h6>A quick view of industry specific problems solved with design by the awesome team at Keystroke.</h6>
                    </div>
                    {/*   <p className='navigation'>Home <img className='mx-3' src={right} alt="" /> Portfolio</p> */}
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
                        className="tabs-nav"
                    >
                        <Tab className="mt-4" eventKey="show-all" title="Show All" >
                            <Showall />
                        </Tab>

                        <Tab className="mt-4" eventKey="branding" title="Branding">
                            <Branding />
                        </Tab>
                        <Tab className="mt-4" eventKey="development" title=" Development">
                            <Development />
                        </Tab>
                        <Tab className='mt-4' eventKey="Graphic-Design" title="Graphic Design">
                            <GraphicDesign />
                        </Tab>
                        <Tab className="mt-4" eventKey="Marketing" title="Marketing">
                            <GraphicDesign />
                        </Tab>
                        <Tab className="mt-4" eventKey="SEO" title="SEO">
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

                {/* ========== Review section start =========== */}
                <div className=' mt-md-5'>
                    <Review></Review>
                </div>
            </div>
            <LetsTalk></LetsTalk>
        </>
    );

};

export default Portfolio;