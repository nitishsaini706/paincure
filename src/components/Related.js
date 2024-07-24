"use client"
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Related({ mainHeading,headings, points }) {
    return (

//     //   <div className='mb:m-3 mb:mt-4'>
//     //   <h1 className=' text-3xl text-center mt-5 font-bold'>{mainHeading}</h1>
//     //   {headings.map((head, index) => (
//     //     <Row key={index} className={`mt-5 mb-5 flex justify-center items-center} lg:h-[300px]`}>
//     //       <Col md={6} className='flex justify-center items-center'>
//     //         <div>
//     //           <h1 className='md:text-3xl mb:text-2xl mb:w-[300px] font-bold md:w-[500px]'>{head}</h1>
//     //           <p className='mt-4 md:text-lg mb:text-sm'>{points[index]}</p>
//     //         </div>
//     //       </Col>
//     //     </Row>
//     //   ))}
//     // </div>
      <div className='flex flex-col justify-center items-center mb-[100px]'>
        <h1 className='text-3xl font-bold m-5'>{mainHeading}</h1>
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
  
  
  
// import React from "react";

// const Related = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <h1 className="text-4xl font-bold mb-10">Holistic mental health care</h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
//         <div className="bg-white p-6 rounded-lg shadow-lg">
//           <h2 className="text-xl font-semibold mb-2">Wearable</h2>
//           <p>
//             Neurostimulation device that treats depression without the use of
//             drugs and their side effects.
//           </p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-lg">
//           <h2 className="text-xl font-semibold mb-2">Therapy</h2>
//           <p>
//             Weekly therapy sessions along with unlimited chat support designed
//             to help you cope faster.
//           </p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-lg">
//           <h2 className="text-xl font-semibold mb-2">Psychiatry</h2>
//           <p>
//             Access free on-demand doctor consultations whenever you need
//             additional support.
//           </p>
//         </div>
//         <div className="col-span-1 md:col-span-3 flex justify-center my-6">
//           <Image
//             src="/image.png"
//             alt="Mental health care"
//             className="rounded-full h-48 w-48 object-cover"
//           />
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-lg">
//           <h2 className="text-xl font-semibold mb-2">Nutrition</h2>
//           <p>
//             Private sessions with nutritionists to create personalized diet
//             plans tailored to improve your health.
//           </p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-lg">
//           <h2 className="text-xl font-semibold mb-2">Physical fitness</h2>
//           <p>
//             Accelerate your recovery with unlimited access to evidence-based
//             fitness and yoga routines.
//           </p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-lg">
//           <h2 className="text-xl font-semibold mb-2">Care Coaching</h2>
//           <p>
//             Unlimited access to a dedicated program coach who supports you in
//             your program journey.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Related;