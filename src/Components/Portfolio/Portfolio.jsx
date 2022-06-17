import React from 'react';
import "./Portfolio.css"
import PortfolioImage from "../../Images/portfolioImage.png"
import right from "../../Images/rightServiceArrow.png"
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
            <div className='container'>
                <Tabs
                    defaultActiveKey="show-all"
                    transition={false}
                    id="noanim-tab-example"
                    className="mb-3"
                >
                    <Tab className="tab-text" eventKey="show-all" title="Show All">
                        <Showall />
                    </Tab>
                    <Tab eventKey="branding" title="Branding">
                    <Branding />
                    </Tab>
                    <Tab eventKey="development" title=" Development">
                        <Development />
                    </Tab>
                    <Tab eventKey="Graphic-Design" title="Graphic Design">
                        <GraphicDesign />
                    </Tab>
                    <Tab eventKey="Marketing" title="Marketing">
                        <GraphicDesign />
                    </Tab>
                    <Tab eventKey="SEO" title="SEO">
                        <SEO />
                    </Tab>
                </Tabs>

            </div>
        </>
    );

};

export default Portfolio;