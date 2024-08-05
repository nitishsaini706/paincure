"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

export default function Header({ bg = "white", color = "black" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);

  useEffect(() => {
    const timo1 = setTimeout(() => {
      setIsServiceOpen(false);
    }, 3000);

    return () => clearTimeout(timo1);
  }, [isServiceOpen]);

  // useEffect(() => {
  //   const timo = setTimeout(() => {
  //     setIsMenuOpen(false);
  //   }, 5000);

  //   return () => clearTimeout(timo);
  // }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleService = () => {
    setIsServiceOpen(prev => !prev);
  };

  return (
    <nav   className={`mb:min-w-full sticky top-0 z-40 mb:border-[1px] lg:border-0 mb:border-blue-950 lg:text-[20px] lg:px-4 mb:px-[50px] lg:pt-4 mb:pt-3 pb-3 ${bg !== 'white' ? `bg-gradient-to-r from-blue-500 to-blue-400 ` : `bg-white`} ${color === 'black' ? 'text-black' : 'text-white'}`}>
      <div className="lg:container lg:flex lg:justify-between lg:items-center">
        <div className="flex lg:items-center justify-between lg:mt-3">
          <a className="flex items-center" href="/">
            <Image id="img" src="https://pub-347bb297e82743de9cb21763c18763ef.r2.dev/paincure/logo.png" alt="logo" width={30} height={30} className="mr-2" />
            <p className={`lg:ml-2 mb-1 font-bold`}>paincure.Ai</p>
          </a>
          <div className="lg:hidden">
            <button className={`text-${color === 'white' ? 'white' : 'black'} focus:outline-none`} onClick={toggleMenu}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className={`w-full block lg:flex lg:items-center lg:ml-[40px] lg:w-auto ${isMenuOpen ? 'block' : 'hidden'}`} >
          <div className="text-sm lg:flex-grow">
            <Link href="/">
              <p className={`block lg:inline-block lg:mt-0 lg:mr-[40px] mb:mt-5 lg:text-[18px] no-underline hover:font-semibold`}>Home</p>
            </Link>

            <div className="lg:relative lg:inline-block text-left " onMouseEnter={()=>setIsServiceOpen(true)} onClick={toggleService}>
            <div className="flex  items-center " >
                <p 
                    className={`hover:font-semibold lg:text-[18px] block cursor-pointer mb:mt-2 lg:inline-block lg:mt-0 lg:mr-[30px] no-underline ${color === 'black' ? 'text-black' : 'text-white'} bg-${bg === 'white' ? 'white' : 'gray-700'} hover:bg-opacity-75`}
                >
                    Services
                </p>
                <button onClick={toggleService} className="focus:outline-none lg:hidden mb:mt-2 mb:ml-1">
                    {isServiceOpen ? (
                        <FaChevronUp className="text-whit" />
                    ) : (
                        <FaChevronDown className="text-whit" />
                    )}
                </button>
            </div>

              <div onMouseEnter={()=>setIsServiceOpen(true)} onMouseLeave={()=>setIsServiceOpen(false)} className={` ${isServiceOpen ? 'open' : ''}`}>
                {isServiceOpen && (
                  <div className="lg:origin-top-right lg:absolute mb:left-5 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 " >
                    <div className="py-1">
                      <Link href="/services/neck-service">
                        <p className="block px-4 py-2 text-sm text-gray-700 hover:font-semibold">Neck Pain</p>
                      </Link>
                      <Link href="/services/lower-back-service">
                        <p className="block px-4 py-2 text-sm text-gray-700 hover:font-semibold">Lower Back Pain</p>
                      </Link>
                      <Link href="/services/wrist-service">
                        <p className="block px-4 py-2 text-sm text-gray-700 hover:font-semibold">Wrist Pain</p>
                      </Link>
                      <Link href="/services/knee-service">
                        <p className="block px-4 py-2 text-sm text-gray-700 hover:font-semibold">Knee Pain</p>
                      </Link>
                      <Link href="/services/sedentary-lifestyle-service">
                        <p className="block px-4 py-2 text-sm text-gray-700 hover:font-semibold">Sedentary Lifestyle</p>
                      </Link>
                      <Link href="/services/yoga-service">
                        <p className="block px-4 py-2 text-sm text-gray-700 hover:font-semibold">Yoga for Migraines and Headaches</p>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <Link href="/about">
              <p className={`block mb:mt-2 lg:inline-block lg:mr-[40px] lg:text-[18px] no-underline hover:font-semibold`}>About Us</p>
            </Link>
            <Link href="/blogs">
              <p className={`block lg:mt-4 mb:mt-2 lg:inline-block mr-[40px] lg:text-[18px] no-underline hover:font-semibold`}>Blogs</p>
            </Link>
            <Link href="/pricing">
              <p className={`block lg:mt-4 mb:mt-2 lg:inline-block mr-[30px] lg:text-[18px] no-underline hover:font-semibold`}>Pricing</p>
            </Link>
            <Link href="https://paincurcmsfrontend.vercel.app/">
              <p className={`block lg:mt-4 mb:mt-2 lg:inline-block lg:text-[18px] no-underline `}>Become Health Expert</p>
            </Link>
          </div>
          <div className="flex lg:items-center mb:justify-between mb:mt-4 mb:pb-2 lg:ml-[100px]">
            <Link href="/signup">
              <p className={`${bg === 'white' ? 'border border-black' : 'border border-white '} hover:bg-blue-600 hover:text-white px-4 mx-2 py-2 rounded-2xl text-sm`}>Sign Up</p>
            </Link>
            <Link href="/login">
              <p className={`${bg === 'white' ? 'border border-black' : 'border border-black bg-white text-black'} hover:bg-black hover:text-white px-4 mx-2 py-2 rounded-2xl text-sm`}>Login</p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
