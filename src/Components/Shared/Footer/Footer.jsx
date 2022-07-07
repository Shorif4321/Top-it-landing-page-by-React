import React from 'react';
import "./Footer.css"
import logo from "../../../Images/Untitled-1-1-1.png"
import { Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link';

const Footer = () => {

    return (
        <div className='footer-main p-md-5'>
            <div className='container'>

                <div className=' mt-md-5 pt-5  footer-sections'>
                    <div className="col-md-3 col-12 first-colum">
                        <img className='mb-2' src={logo} alt="" />
                        <p className='pe-md-5'>The TOP IT LTD has the same motives to make a skilled generation of information and technology in Bangladesh and worldwide.
                        </p>
                        <h6>GET IN TOUCH</h6>
                        <p ><a href="https://www.facebook.com/topitltdbd" target="_blank" className='text-decoration-none'><i className="social fab fa-facebook-f"></i></a>
                            <a href="" target="_blank" className='text-decoration-none'> <i className="social fab fa-twitter"></i></a>
                            <a href="" target="_blank" className='text-decoration-none'>  <i className="social fab fa-instagram"></i></a>
                        </p>
                    </div>
                    <div className="col-md-3  col-12">
                        <h4 className='footer-head'>Quick Links</h4>
                        <Link className='text-decoration-none footer-link' to="/home">Home</Link>
                        <Link className='text-decoration-none footer-link' to="/service">Service</Link>
                        <Link className='text-decoration-none footer-link' to="/portfolio">Portfolio</Link>
                        <Link className='text-decoration-none footer-link' to="/about-us">About us</Link>
                        <Link className='text-decoration-none footer-link' to="/blog">Blog</Link>
                    </div>
                    <div className="col-md-3  col-12">
                        <h4 className='footer-head'>Services</h4>
                        <HashLink smooth className='footer-link' to="/service/#serviceOne"> Branding and Identity</HashLink>
                        <HashLink smooth className='footer-link' to="/service/#serviceFour">Web Design and Development</HashLink>
                        <HashLink smooth className='footer-link' to="/service/#serviceTwo">Saas Development</HashLink>
                        <HashLink smooth className='footer-link' to="/service/#serviceThree">Graphic Design</HashLink>
                        <HashLink smooth className='footer-link' to="/service/#serviceSix">SEO and Digital Marketing</HashLink>
                        <HashLink smooth className='footer-link' to="/service/#serviceFive">Affiliate Marketing</HashLink>
                    </div>
                    <div className="col-md-3 col-12 first-colum">
                        <h4 className='footer-head'>Contact Us</h4>
                        <p>1/4, Block-E, Sat-Mosjit Road, Mohammadpur Bus Stand, Dhaka-1207. 1207 Dhaka, Dhaka Division, Bangladesh</p>
                        <p>info@topitltd.com</p>
                        <p>Phone: +880 1616-028947 <br />
                            Whatsapp: +880 1681-477270
                        </p>
                    </div>
                </div>

                <div className='footer-bottom'>
                    <div className='py-5'> <span className='divider'></span></div>
                    <div className='d-md-flex justify-content-between py-3'>
                        <div>
                            <p className='footer-last'>©TopITLTD 2022. All rights reserved.</p>
                        </div>
                        <div className='d-md-flex'>
                            <Link to="/privacy" className='text-decoration-none'><p className='footer-last me-3'>Privacy Policy</p></Link>
                            <Link to="/tram&Condition" className='text-decoration-none'><p className='footer-last'>Terms of Conditions</p></Link>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;