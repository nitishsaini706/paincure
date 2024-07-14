"use client"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
export default function individual() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8">
                <h2 className="text-3xl font-bold mb-3 text-center">Create an account</h2>
                <h6 className='text-md text-center mb-6'>Start your 30-days free trial</h6>
                <Form>
                    <div className='flex'>
                        <Form.Group controlId="formBasicFirstName" className='mr-5'>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="name" placeholder="John" />
                        </Form.Group>
                        <Form.Group controlId="formBasicLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="name" placeholder="Doe" />
                        </Form.Group>
                    </div>
                    <Form.Group controlId="formBasicEmail" className="mt-4">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Ex: john@paincure.ai" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword" className="mt-4">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="********" />
                    </Form.Group>
                    <Form.Group controlId="formBasicRePassword" className="mt-4">
                        <Form.Label>Re-enter your password</Form.Label>
                        <Form.Control type="password" placeholder="********" />
                    </Form.Group>
                    <Form.Group controlId="formBasicMobile" className="mt-4">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="number" placeholder="1234567890" />
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
                    <Button variant="primary" type="submit" className="w-full mt-4">
                        Sign in
                    </Button>

                    <Button variant="outline-primary" type="button" className="w-full mt-2">
                        <img src="/google-logo.png" alt="Google logo" className="inline-block w-4 h-4 mr-2" />
                        Sign in with Google
                    </Button>

                    <div className="text-center mt-4">
                    <p className="text-sm">Already have an account? Login</p>
                    </div>
                </Form>
            </div>
        </div>
    )
}