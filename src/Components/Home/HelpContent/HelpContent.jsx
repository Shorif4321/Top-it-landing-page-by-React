import React from 'react';
import "./HelpContent.css"
import helpImage from "../../../Images/helpClients.jpg"

const HelpContent = () => {
    return (
        <div className="container">
            <div className='d-lg-flex justify-content-between my-5 pt-5 align-items-center'>
                <div className='col-12 col-md-12 col-lg-5' >
                    <img className='help-image img-fluid' src={helpImage} alt="Banner image" />
                </div>

                <div className='col-12 col-md-12 col-lg-7  help' data-aos="fade-up"
                    data-aos-duration="1500">
                    <h1 className='help-head mb-4'>
                        Helping your Organization to Achieve what It Deserves
                    </h1>
                    <p className='help-description'>The dreams of your business organization are to reach the goal on time with the best outcome of development with great success. To achieve the goals of the organization in time, need the best business strategy, plan and proper implementation that are not too easy but possible. </p>
                    <p className="help-description">When you are worried about making proper growth and development of your business and branding, the company, top it ltd, is committed to making come true your dream with the best business strategy, planning and implementation. Your organisation must achieve what it deserves.</p>
                    <div className='help-button pt-3'>
                        <button className='hero-button1 mt-0'>About Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpContent;