"use client"
import React from 'react'

export default function Related({headings,points}) {
  return (
    <div className='flex flex-col justify-center items-center mb-[100px]'>
        <h1 className='text-3xl font-bold m-5'>Related Conditions</h1>
        <div className='md:flex'>
            <div className='border-1 border-black rounded-2xl md:w-[400px] p-4 md:mx-3 flex flex-col mb:mx-4'>
                <div className='text-xl font-semibold mb-2'>
                    {headings[0]}
                    </div>
                    <div>
                    {points[0]}
                        </div>
            </div>
            <div className='border-1 border-black rounded-2xl md:w-[600px] mb:w-[400px] p-4 flex flex-col md:mx-2 mb:mx-4 mb:mt-4'>
                <div className='text-xl font-semibold mb-2'>
                    {headings[1]}
                    </div>
                    <div>
                        {points[1]}
                        </div>

            </div>
        </div>
        <div className='md:flex my-3'>

            <div className='border-1 border-black rounded-2xl md:w-[600px] mb:w-[400px] p-4 flex flex-col md:mx-3 mb:mx-4'>
                <div className='text-xl font-semibold mb-2'>
                    {headings[2]}
                    </div>
                    <div>
                        {points[2]}
                        </div>

            </div>
            <div className='border-1 border-black rounded-2xl w-[400px] p-4 flex flex-col md:mx-2 mb:mx-4 mb:mt-4'>

                <div className='text-xl font-semibold mb-2'>
                    {headings[3]}
                    </div>
                    <div>
                    {points[3]}
                        </div>
            </div>
            
        </div>
    </div>
  )
}
