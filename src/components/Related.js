"use client"
import React from 'react'


export default function Related({ headings, points }) {
    return (
      <div className='flex flex-col justify-center items-center mb-[100px]'>
        <h1 className='text-3xl font-bold m-5'>Related Conditions</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 justify-center'>
          {points.map((point, index) => (
            <div key={index} className='border-1 border-black rounded-2xl p-4 flex flex-col m-3'>
              <div className='text-xl font-semibold mb-2'>
                {headings[index]}
              </div>
              <div>
                {point}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  
