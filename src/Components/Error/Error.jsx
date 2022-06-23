import React from 'react';
import "./Error.css"
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <div className="error-page container">
                <h1 className="">404</h1>
                <h2>Page not Found</h2>
                <div className='col-12 col-md-6 m-auto'>
                    <h6 className="des m-auto my-5">we are sorry The page you requested is not found. Plase go back to the Home page or contact us by <span className='fs-5'> info@topitltd.com</span> & Phone: <span className='fs-5'>+880 1616-028947</span>
                    </h6>
                </div>
                <Link to="/home"><button className="hero-button1 mb-5">Back to Home</button></Link>
            </div>

        </div>
    );
};

export default Error;