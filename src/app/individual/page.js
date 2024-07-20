"use client"
import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import Link from 'next/link';
import Image from 'next/image';
import { toast } from 'react-toastify';

export default function Individual() {
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRePassword] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    

    const handleSign = async (e) => {
        e.preventDefault();
        try {
            
            if (!first) {
                toast.error('First name is required');
                return;
            }
            
            if (!last) {
                toast.error('Last name is required');
                return;
            }
            
            if (!email) {
                toast.error('Email is required');
                return;
              }
              if (!password) {
                toast.error('Password is required');
                return;
              }
          
              if (password.length < 8) {
                toast.error('Password must be at least 8 characters long');
                return;
              }
          
              if (password !== repassword) {
                toast.error('Passwords do not match');
                return;
              }
          const response = await fetch(process.env.url+'login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email:email,firstname:first,lastname:last, password:password,phone:mobile }),
          });
          
          const data = await response.json();
          if (data.token) {
            localStorage.setItem('token', data.token); // Store the JWT token
            // Redirect or update UI after successful login
            toast.success('Login successful');
          } else {
            toast.error('Singin failed');
          }
        } catch (error) {
          console.error('Login error:', error);
          toast.error('An error occurred. Please try again.');
        }
        
      };
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8">
                <h2 className="text-3xl font-bold mb-3 text-center">Create an account</h2>
                <h6 className='text-md text-center mb-6'>Start your 30-days free trial</h6>
                <Form>
                    <div className='flex'>
                        <Form.Group controlId="formBasicFirstName" className='mr-5'>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="name" value={first} placeholder="John" onChange={(e)=>{setFirst(e.target.value)}}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="name" value={last} placeholder="Doe" onChange={(e)=>{setLast(e.target.value)}}/>
                        </Form.Group>
                    </div>
                    <Form.Group controlId="formBasicEmail" className="mt-4">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" value={email} placeholder="Ex: john@paincure.ai" onChange={(e)=>{setEmail(e.target.value)}}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword" className="mt-4">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={password} placeholder="********" onChange={(e)=>{setPassword(e.target.value)}}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicRePassword" className={`mt-4 ${password!=repassword ? 'border-1 border-red-600':''}`}>
                        <Form.Label>Re-enter your password</Form.Label>
                        <Form.Control type="password" placeholder="********" value={repassword} onChange={(e)=>{setRePassword(e.target.value)}}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicMobile" className="mt-4">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="number" placeholder="1234567890" value={mobile} onChange={(e)=>{setMobile(e.target.value)}}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicMobile" className="mt-4">
                        <Form.Label>Which services interest you?</Form.Label>

                        <Dropdown>
                            <Dropdown.Toggle
                                variant="outline-secondary"
                                id="dropdown-basic"
                                className="w-full text-left"
                            >
                                Select your plan
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="w-full">
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Form.Group controlId="formBasicQuestion" className="mt-4">
                        <Form.Label>Do you have any serious health conditions we should know about?</Form.Label>
                       <div className='flex'>
                       <Button variant="outline-secondary" type="submit" className="w-full mr-5">
                        Yes
                    </Button>
                    <Button variant="outline-secondary" type="submit" className="w-full">
                        No
                    </Button>
                       </div>
                    </Form.Group>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-full mt-4" onClick={handleSign}>
                        Sign in
                    </Button>

                    <Button variant="outline-primary" type="button" className="w-full mt-2">
                    <Image src="/google-logo.png" alt="Google logo" className="inline-block w-4 h-4 mr-2" width={4} height={4} />
                        Sign in with Google
                    </Button>

                    <div className="text-center mt-4">
                    <p className="text-sm">Already have an account?<Link  href="/login" passHref>Login</Link> </p>
                    </div>
                </Form>
            </div>
        </div>
    )
}