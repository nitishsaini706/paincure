'use client'
import React from 'react'
import HeroSection from "../../../components/HeroSection"
import Causes from '../../../components/Causes'
import Related from '../../../components/Related'
import Banner from '@/components/Banner'
export default function page() {
  return (
    <div className='container'>
      <HeroSection heading="Lower Back Pain in Remote Employees" para="Lower back pain (LBP) is common among remote workers and is characterized by discomfort or pain
     in the lower spine. It can range from mild discomfort to severe, debilitating pain, affecting quality of life and productivity." 
       image="/lowerBackService.png" />

      <Causes points={["Muscle Strain","Herniated Discs","Spinal Stenosis","Osteoarthritis" , "Scoliosis","Lifestyle Factors"]}/>
      <Banner />
      <Related points={["Radiating pain from the lower back to the legs due to nerve compression.","Degenerative changes in the spine, worsened by long work hours and poor ergonomics.",
        "Pain from abnormal loading on muscles and joints due to poor posture."
      ]} headings={["Sciatica","Lumbar Spondylosis","Postural LBP"]}/>
    </div>
  )
}