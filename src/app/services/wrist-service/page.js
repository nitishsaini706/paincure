'use client'
import React from 'react'
import HeroSection from "../../../components/HeroSection"
import Causes from '../../../components/Causes'
import Related from '../../../components/Related'
import Banner from '@/components/Banner'
export default function page() {
  return (
    <div className='container'>
      <HeroSection heading="Wrist and Ankle Pain in Remote Employees" para="Wrist and ankle pain are common issues among remote workers, characterized by
       discomfort or pain in the joints of the wrists and ankles. These conditions can range from mild discomfort to severe pain, impacting daily activities and productivity." 
       image="/wristPainService.png" />

      <Causes points={["Repetitive Strain Injuries (RSIs):","Poor Ergonomics","Prolonged Sitting","Improper Footwear" , "Lack of Movement","Overuse"]}/>
      <Banner />
      <Related points={["Compression of the median nerve in the wrist, causing pain, numbness, and tingling.","Inflammation of the tendons in the wrist or ankle due to overuse.",
        "Inflammation of the plantar fascia in the foot, causing heel and ankle pain.","Degeneration of the joints, leading to chronic pain in the wrists and ankles.",
        "Noncancerous lumps along the tendons or joints of the wrists, causing pain and discomfort."
      ]} headings={["Carpal Tunnel Syndrome","Tendonitis","Plantar Fasciitis","Arthritis","Ganglion Cysts"]}/>
    </div>
  )
}