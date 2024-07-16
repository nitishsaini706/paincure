"use client"
import { Container,Col } from 'react-bootstrap'
import Image from "next/image"
import React from 'react'

export default function HeroSection({heading,para,image}) {
  return (
    <div className='lg:m-5 lg:p-3 mb:m-3 mb:mt-4'>
      <Container className='lg:flex lg:justify-between lg:items-center'>
          <Col md={6}>
          <h1 className='md:text-3xl mb:text-2xl mb:w-[300px] font-bold md:w-[400px] lg:mr-3'>{heading}</h1>
          <p className='mt-4 md:text-lg mb:text-sm'>{para}</p>
          </Col>
          <Col md={6} className='lg:flex lg:justify-center mb:my-5 '>
          <Image src={image} height={500} width={500}/>
          </Col>
      </Container>
    </div>
  )
}
