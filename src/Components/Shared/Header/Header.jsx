import React from 'react';
import "./Header.css"
import logo from "../../../Images/Untitled-1-1-1.png"
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='container my-4'>
            <Navbar expand="lg">
                <Container className='d-flex'>
                    
                 
                      <Navbar.Brand ><Link to="/home"> <img src={logo} alt="" /> </Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                  
                  
                       
                  
                       <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="nav-items ms-auto my-2 my-lg-0"
                                style={{ maxHeight: '200px' }}
                                navbarScroll
                            >
                                <Nav.Link className='' > <Link to="/home">Home</Link></Nav.Link>
                                <Nav.Link > <Link to="/service">Service</Link></Nav.Link>
                                <Nav.Link > <Link to="/portfolio">Portfolio</Link></Nav.Link>
                                <Nav.Link className='last-child ms-5'><Link to='/contact'>Let’s Talk</Link></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                     
                   
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;