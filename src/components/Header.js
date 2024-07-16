"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header({ bg = "white", color = "black" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleService = () => {
    setIsServiceOpen(!isServiceOpen);
  };

  return (
    <nav className={` lg:ml-20 mb:border-[1px] lg:border-0 mb:border-blue-950 lg:text-[20px] px-4 pt-4 pb-2 ${bg === 'white' ? ' border-b border-black bg-white' : 'bg-[#3D4966]'} ${color === 'black' ? 'text-black' : 'text-white'}`}>
      <div className="lg:container lg:flex lg:justify-between">
        <div className="flex lg:items-center justify-between">
          
            <a className="flex items-center">
              <Image id="img" src="/logo.png" alt="logo" width={20} height={20} className="mr-2" />
              <p className={`ml-2 mb-1`}>paincure.AI</p>
            </a>
          
        <div className="lg:hidden">
          <button className={`text-${color === 'white' ? 'white' : 'black'} focus:outline-none`} onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        </div>
        <div className={`w-full block lg:flex lg:items-center lg:ml-[200px] lg:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="text-sm lg:flex-grow">
            <Link href="/">
              <p className={`block mt-4 lg:inline-block lg:mt-0 mx-2`}>Home</p>
            </Link>
            
            <div className="lg:relative lg:inline-block text-left">
              <button onClick={toggleService} className={`inline-flex justify-center lg:w-full rounded-md lg:px-4 mb:pl-2  py-2 text-sm font-medium ${color === 'black' ? 'text-black' : 'text-white'} bg-${bg === 'white' ? 'white' : 'gray-700'} hover:bg-opacity-75`}>
                Services
              </button>
              {isServiceOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                  <Link href="/">
                      <p className="block px-4 py-2 text-sm text-gray-700">Action</p>
                      </Link>
                      <Link href="/">
                      <p className="block px-4 py-2 text-sm text-gray-700">Another action</p>
                      </Link>
                      <Link href="/">
                      <p className="block px-4 py-2 text-sm text-gray-700">Something</p>
                      </Link>
                  </div>
                </div>
              )}
            </div>
            <Link href="/about">
              <p className={`block lg:mt-4 mb:mt-2 lg:inline-block  mx-2`}>About Us</p>
              </Link>
              <Link href="/blogs">
              <p className={`block lg:mt-4 mb:mt-2 lg:inline-block  mx-2`}>Blogs</p>
              </Link>
          </div>
          <div className="flex items-center mb:mt-4 mb:pb-2 lg:ml-[200px]">
            <Link href="/login">
              <p className={`${bg === 'white' ? 'text-black border border-black bg-white' : 'text-white border border-white bg-[#3D4966]'} py-2 px-4 mx-2 rounded-2xl text-sm`}>Login</p>
            </Link>
            
            <Link href="/signup">
            
              <p className={`${bg === 'white' ? 'text-white bg-blue-500' : 'text-black border border-black bg-white'} px-4 mx-2 py-2 rounded-2xl text-sm`}>Sign Up</p>
            </Link>
            
          </div>
        </div>
      </div>
    </nav>
  );
}
