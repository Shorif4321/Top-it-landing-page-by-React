import React from 'react';
import "./Header.css"
import logo from "../../../Images/Untitled-1-1-1.png"

const Header = () => {
    return (
        <div className='container d-md-flex justify-content-between align-items-center my-4'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='nav-items'>
                <a href="#">Home</a>
                <a href="#">Services</a>
                <a href="#">Blog</a>
                <a className='last-child' href="#">Let’s Talk</a>

            </div>
        </div>
    );
};

export default Header;