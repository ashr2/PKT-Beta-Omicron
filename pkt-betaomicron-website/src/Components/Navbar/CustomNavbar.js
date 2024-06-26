import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './CustomNavbar.css'
const CustomNavbar = () => {
    return (
        <Navbar id="navbar"
        >
            <Nav>
                <Nav.Link class="navlink" id="home-link">Home</Nav.Link>
                <Nav.Link class="navlink" id="whyrush-link">Why Rush</Nav.Link>
                <Nav.Link class="navlink" id="execboard-link">Exec Board</Nav.Link>
                <Nav.Link class="navlink" id="brotherhood-link">Brotherhood</Nav.Link>
                <Nav.Link class="navlink" id="alumni-link">Alumni</Nav.Link>
                <Nav.Link class="navlink" id="academics-link">Academics</Nav.Link>
            </Nav>
        </Navbar>
    );
};
export default CustomNavbar;