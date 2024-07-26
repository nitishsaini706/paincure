"use client"
import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'react-toastify';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (!username) {
        toast.error('Email is required');
        return;
      }
      if (!password) {
        toast.error('Password is required');
        return;
      }
      const response = await fetch(process.env.url+'login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email:username, password:password }),
      });

      const data = await response.json();
      if (data.token) {
        localStorage.setItem('token', data.token); // Store the JWT token
        // Redirect or update UI after successful login
        toast.success('Login successful');
      } else {
        toast.error('Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 ">
        <h2 className="text-3xl font-bold mb-3 text-center">Log in to your account</h2>
        <h6 className='text-md text-center mb-6'>Please enter your details</h6>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" value={username} placeholder="Ex: john@paincure.Ai" onChange={(e)=>{setUsername(e.target.value)}}/>
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mt-4">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={password} placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
          </Form.Group>

          <div className="text-right mt-2">
            <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
          </div>

          <Button variant="primary" type="submit" className="w-full mt-4" onClick={handleLogin}>
            Login
          </Button>

          <Button variant="outline-primary" type="button" className="w-full mt-2">
          <Image src="/google-logo.png" alt="Google logo" className="inline-block w-4 h-4 mr-2" width={4} height={4} />
            Sign in with Google
          </Button>

          <div className="text-center mt-4">
          <p className="text-sm">Don't have an account?<Link href='/signup' passHref>Sign up</Link> </p>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
