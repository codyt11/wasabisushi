import React from "react";
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Facebook, Instagram } from 'react-bootstrap-icons';

function Header () {
    return(
        <Navbar  className="navbar" expand="lg">
        <div className="dilly d-none d-md-block">
            <Facebook size={30} className="facebook"/>
            <Instagram size={30} className="instagram"/>
        </div>
      <Container className="d-flex flex-lg-column">
        <div><Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand></div>
        <Navbar.Toggle className="tog" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="w-100 pt-3" id="basic-navbar-nav">
          <Nav className="mx-auto w-75 d-flex justify-content-between">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#menu">MENU</Nav.Link>
            <Nav.Link href="#menu">ABOUT</Nav.Link>
            <Nav.Link href="#menu">CAREERS</Nav.Link>
            <Nav.Link href="#menu">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
export default Header