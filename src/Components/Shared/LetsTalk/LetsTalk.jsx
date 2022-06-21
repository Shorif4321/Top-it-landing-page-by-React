import React from 'react';
import { Link } from 'react-router-dom';
import "./LetsTalk.css"

const LetsTalk = () => {
    return (
        <div>
            {/* ========== Portfolio last section start =========== */}
            <div className='portfolio-last mb-5 py-5'>
                <div className='container'>
                    <div className='row justify-content-between align-items-center'>
                        <div className='col-12 col-md-12 col-lg-7 portfolio-talk'>
                            <h2>Let’s talk about the Project!</h2>
                            <p className='pb-4'>Our clients get the best results when they have our team dedicated to their business for extended periods of time.</p>
                        </div>
                        <div className='col-12 col-md-12 col-lg-3 text-align-right'>
                            <Link className='portfolio-last-button' to="/contact">Let’s Talk</Link>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default LetsTalk;