import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import "./LetsTalk.css"

const LetsTalk = () => {
    return (
        <div>
            {/* ========== Portfolio last section start =========== */}
            <div className='portfolio-last py-5' >
                <div className='container'>
                    <div className='row justify-content-between align-items-center'>
                        <div className='col-12 col-md-12 col-lg-7 portfolio-talk'>
                            <h2 data-aos="fade-up"
                                data-aos-duration="1000">Let’s talk about the Project!</h2>
                            <p className='pb-4' data-aos="fade-up"
                                data-aos-duration="1200">Our clients get the best results when they have our team dedicated to their business for extended periods of time.</p>
                        </div>
                        <div className='col-12 col-md-12 col-lg-3 text-align-right' data-aos="fade-up"
                            data-aos-duration="1700">
                            <HashLink className='portfolio-last-button' to="/contact/#contact">Let’s Talk</HashLink>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default LetsTalk;