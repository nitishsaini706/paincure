"use client"
import { Container,Col,Row } from 'react-bootstrap'
import Image from "next/image"
import React from 'react'

export default function HeroSection({heading,para,image}) {
  return (
    <div className='mb:m-3 mb:mt-4 bg-gradient-to-r from-blue-500 to-blue-400 text-white'>
        <Row>
        <Col md={6}>
          <Image src={image} height={800} width={800}  className='rounded-none border-0 w-full h-full lg:max-h-[500px]  max-w-[800px] mb:max-h-[300px]'/>
          </Col>
          <Col md={6} className='flex justify-center items-center'>
          <div className='mb:p-2'>
          <h1 className='md:text-3xl mb:text-2xl mb:w-[300px] font-bold md:w-[400px]'>{heading}</h1>
          <p className='mt-4 md:text-lg mb:text-sm'>{para}</p>
          </div>
          </Col>
        </Row>
    </div>
  )
}
