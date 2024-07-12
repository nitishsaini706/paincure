"use client"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Button } from 'react-bootstrap';
const Signup = () =>{
    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
              <div className="w-full max-w-xl p-8 ">
            <h3  className="text-3xl font-bold mb-3 "> Welcome! Let's get you started</h3>
            <Button variant="outline-primary" type="button" className="w-half mr-10">I'm a company executive</Button>
            <Button variant="outline-primary" type="button" className="w-half">I'm an individual</Button>
        </div>
        </div>
    );
};

export default Signup