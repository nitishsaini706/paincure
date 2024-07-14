"use client"
import React from 'react';
import Image from 'next/image';
import { Container, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import Link from 'next/link';

export default function Header({ bg="white", color="black" }) {
  return (
<Navbar expand="lg" bg={bg === 'white' ? bg : ''} className={bg === 'white' ? 'bg-opacity-75 border-b border-black' : ''} style={{ background: bg === 'white' ? '' : '#3D4966' }}>
<Container >
        <Navbar.Brand href="/" className='ml-24 d-flex items-center'>
        <Image id='img' src="/logo.png" alt="logo" width={20} height={20} className='mr-2'/>
          <p className={`text-${color} ml-2 mb-1`}>paincure.AI</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="ml-28" id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/"  className={`text-${color} mx-2`}>Home</Nav.Link>
            <NavDropdown title="Services" menuVariant={color} id="nav-dropdown" className={`text-${color}`} >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link href="#link" className={`text-${color} mx-2`}>About Us</Nav.Link>
            <Nav.Link href="#link" className={`text-${color} mx-2`}>Blogs</Nav.Link>
          </Nav>
          <Navbar.Text>
          <Link href="/login" passHref>
            <Button type="submit" className={`${bg === 'white' ? `text-black border-1 border-solid border-black bg-white` : `text-white border-1 border-solid border-white bg-[#3D4966]`} px-3 mx-2 rounded-2xl`}>Login</Button>
          </Link>
          <Link href="/signup" passHref>
            <Button className={`${bg === 'white' ? `text-white bg-blue-500` : `text-black border-1 border-solid border-black bg-white`} px-3 mx-2 rounded-2xl`}>Sign Up</Button>
          </Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  
}
