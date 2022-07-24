import React from 'react';
import "./Header.css"
import logo from "../../../Images/Untitled-1-1-1.png"
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const Header = () => {
    const [expanded, setExpanded] = useState(false);
    //change color on scroll
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 50) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)

    return (
        <div className='container m-auto my-4 py-4' >
            <Navbar expanded={expanded} className={color ? 'nav-basic on-scroll' : 'nav-basic'} expand="lg py-4  " >{/*  */}
                <Container className='d-flex'>
                    <Navbar.Brand ><Link to="/"> <img className='img-fluid' src={logo} alt="" /> </Link></Navbar.Brand>
                    <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} className='mb-1' aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="nav-items ms-auto my-2 my-lg-0"
                            /* style={{ maxHeight: '200px' }} */
                            navbarScroll
                        >
                            <Nav.Link className='' > <Link onClick={() => setExpanded(false)} to="/">Home</Link></Nav.Link>
                            <Nav.Link className='' > <Link onClick={() => setExpanded(false)} to="/technologies">Technologies</Link></Nav.Link>
                            <Nav.Link > <Link onClick={() => setExpanded(false)} to="/service">Service</Link></Nav.Link>
                            <Nav.Link > <Link onClick={() => setExpanded(false)} to="/portfolio">Portfolio</Link></Nav.Link>
                            <Nav.Link > <Link onClick={() => setExpanded(false)} to="/about-us">About Us</Link></Nav.Link>
                            <Nav.Link > <Link onClick={() => setExpanded(false)} to="/blog">Blog</Link></Nav.Link>
                            <Nav.Link className='last-child ms-md-3' ><Link onClick={() => setExpanded(false)} to='/contact'>Let’s Talk</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;