'use client'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'

export default function Causes({ image, para, heading }) {
  return (
    <div className='mb:m-3 mb:mt-4'>
      <h1 className='mb-4 text-3xl text-center mt-5 font-bold'>Causes</h1>
      
      {heading.map((head, index) => (
        <Row key={index} className={`mt-2 mb-2 flex justify-center items-center ${index % 2 === 0 ? '' : 'bg-gradient-to-r from-blue-500 to-blue-400 text-white'} lg:h-[300px]`}>
          <Col md={4} className={`flex justify-center items-center ${index % 2 === 0 ? '' : 'order-md-2'}`}>
            <Image src={image[index]} height={250} width={250} className='rounded-full border-0 p-3' />
          </Col>
          <Col md={6} className='flex justify-center items-center'>
            <div>
              <h1 className='md:text-3xl mb:text-2xl mb:w-[300px] font-bold md:w-[500px]'>{head}</h1>
              <p className='mt-4 md:text-lg mb:text-sm'>{para[index]}</p>
            </div>
          </Col>
        </Row>
      ))}
    </div>
  )
}
