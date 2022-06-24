import React from 'react';
import "./FooterTop.css"
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const FooterTop = () => {
    return (
        <div className='footer-main p-md-5'>
            <div className='container'>
                <div className='footerTop-main'>
                    <div className='footer-header'>
                        <h3 className='mb-5'>Let’s get started your project with professional way</h3>
                        <HashLink to="/contact/#contact" className='footer-header-button'>Get started Now </HashLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterTop;