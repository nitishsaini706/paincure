'use client'
import React from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import { motion } from 'framer-motion'

export default function Causes({points}) {
  return (
    <div>
        <Container className='my-5 flex items-center flex-col'>
            <h1 className=' mb-4 text-3xl font-bold'>Causes</h1>
            <div className='flex md:w-[1000px] mb-3 mb:w-[500px] mb:px-[50px]'>

            <motion.div
  className="container bg-blue-300 md:w-32 md:h-32 mb:w-[90px] mb:h-[100px] flex items-center justify-center rounded-2xl"
  whileHover={{ scale: 1.2, rotate: 360 }}
  whileTap={{ scale: 0.8, rotate: -360, borderRadius: "100%" }}
>
  <div className="text-black text-center">{points[0]}</div>
  </motion.div>
            <motion.div
  className="container bg-blue-300 md:w-32 md:h-32 mb:w-[90px] mb:h-[100px] flex items-center justify-center rounded-2xl"
  whileHover={{ scale: 1.2, rotate: 360 }}
  whileTap={{ scale: 0.8, rotate: -360, borderRadius: "100%" }}
>
  <div className="text-black text-center">{points[1]}</div>
  </motion.div>
            <motion.div
  className="container bg-blue-300 md:w-32 md:h-32 mb:w-[90px] mb:h-[100px] flex items-center justify-center rounded-2xl"
  whileHover={{ scale: 1.2, rotate: 360 }}
  whileTap={{ scale: 0.8, rotate: -360, borderRadius: "100%" }}
>
  <div className="text-black text-center">{points[2]}</div>
  </motion.div>
            </div>
            <div className='flex  md:w-[1000px] mb:w-[500px] mb:px-[50px]'>

            <motion.div
  className="container bg-blue-300 md:w-32 md:h-32 mb:w-[90px] mb:h-[100px] flex items-center justify-center rounded-2xl"
  whileHover={{ scale: 1.2, rotate: 360 }}
  whileTap={{ scale: 0.8, rotate: -360, borderRadius: "100%" }}
>
  <div className="text-black text-center">{points[3]}</div>
  </motion.div>
            <motion.div
  className="container bg-blue-300 md:w-32 md:h-32 mb:w-[90px] mb:h-[100px] flex items-center justify-center rounded-2xl"
  whileHover={{ scale: 1.2, rotate: 360 }}
  whileTap={{ scale: 0.8, rotate: -360, borderRadius: "100%" }}
>
  <div className="text-black text-center">{points[4]}</div>
  </motion.div>
            <motion.div
  className="container bg-blue-300 md:w-32 md:h-32 mb:w-[90px] mb:h-[100px] flex items-center justify-center rounded-2xl"
  whileHover={{ scale: 1.2, rotate: 360 }}
  whileTap={{ scale: 0.8, rotate: -360, borderRadius: "100%" }}
>
  <div className="text-black text-center">{points[5]}</div>
  </motion.div>
            </div>

        </Container>
    </div>
  )
}
