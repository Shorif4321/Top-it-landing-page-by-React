import React from 'react';
import "./Footer.css"
import logo from "../../../Images/Untitled-1-1-1.png"

const Footer = () => {
    return (
        <div className='footer-main p-5'>
            <div className='footerTop-main'>
                <div className='footer-header'>
                    <h3>Let’s get started your project with professional way</h3>
                    <button className='mt-3'>Get started Now </button>
                </div>

            </div>
            <div className=' mt-5 pt-5  footer-sections'>
                <div className="col-md-3 col-10 first-colum">
                    <img src={logo} alt="" />
                    <p className='pe-md-5'>The TOP IT LTD has the same motives to make a skilled generation of information and technology in Bangladesh and worldwide.
                    </p>
                    <h6>GET IN TOUCH</h6>
                    <p><i className="social fab fa-facebook-f"></i>
                        <i className="social1 fab fa-twitter"></i>
                        <i className="social fab fa-instagram"></i></p>
                </div>
                <div className="col-md-3  col-10">
                    <h4 className='footer-head'>Quick Links</h4>
                    <a className='footer-link' href="#">Home</a>
                    <a className='footer-link' href="#">Service</a>
                    <a className='footer-link' href="#">Portfolio</a>
                    <a className='footer-link' href="#">About us</a>
                    <a className='footer-link' href="#">Blog</a>
                </div>
                <div className="col-md-3  col-10">
                    <h4 className='footer-head'>Services</h4>
                    <a className='footer-link' href="#">Branding and Identity</a>
                    <a className='footer-link' href="#">Web Design and Development</a>
                    <a className='footer-link' href="#">Saas Development</a>
                    <a className='footer-link' href="#">Graphic Design</a>
                    <a className='footer-link' href="#">SEO and Digital Marketing</a>
                    <a className='footer-link' href="#">Affiliate Marketing </a>
                </div>
                <div className="col-md-3 col-10 first-colum">
                    <h4 className='footer-head'>Contact Us</h4>
                    <p>1/4, Block-E, Sat-Mosjit Road, Mohammadpur Bus Stand, Dhaka-1207. 1207 Dhaka, Dhaka Division, Bangladesh</p>
                    <p>alma.lawson@example.com</p>
                    <p>Phone : +1 (623) 887-3080</p>
                </div>
            </div>

            <div className='footer-bottom'>
                <div className='p-5'> <span className='divider'></span></div>
                <div className='d-md-flex justify-content-between p-3'>
                    <div>
                        <p className='footer-last'>©TopITLTD 2022. All rights reserved.</p>
                    </div>
                    <div className='d-md-flex'>
                        <p className='footer-last me-3'>Privacy Policy</p>
                        <p className='footer-last'>Terms of Conditions</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Footer;