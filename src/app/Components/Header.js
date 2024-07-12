"use client"
import React from 'react';
import { Container, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';

export default function Header() {
  return (
    <Navbar expand="lg" className="bg-blue-700">
      <Container>
        <Navbar.Brand href="#home" className='mx-9 d-flex items-center'>
          <img id='img' src="/image.png" alt="logo" style={{height:"20px"}}/>
          <p className='text-white'>paincure.AI</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="ml-6" id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="text-white">Home</Nav.Link>
            <NavDropdown title="Services"  style={{color:"white !important"}} className="text-white">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" className="text-white">About Us</Nav.Link>
            <Nav.Link href="#link" className="text-white">Blogs</Nav.Link>
          </Nav>
          <Navbar.Text className="justify-content-end">
            <Button type="submit" className="mx-2">Login</Button>
            <Button variant="light">Sign Up</Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
