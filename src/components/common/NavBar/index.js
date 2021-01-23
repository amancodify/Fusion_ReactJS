import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import fusionLogo from "../../../assets/logo-trans-white.png";

const NavBar = () => {
    return (
        <Navbar className="nav-bar-main" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/"><img className="nav-logo" src={fusionLogo} alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#our-story">Our Story</Nav.Link>
                    <NavDropdown title="Services" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Construction</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">House Keeping</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Security</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Outsourcing</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">#More</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#career">Career</Nav.Link>
                    <Nav.Link href="/aboutus">About Us</Nav.Link>
                    <Nav.Link href="#contact"> Contact Us </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default NavBar;