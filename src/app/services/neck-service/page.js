'use client'
import React from 'react'
import HeroSection from "../../../components/HeroSection"
import Causes from '../../../components/Causes'
import Related from '../../../components/Related'

export default function page() {
  return (
    <div>
      <HeroSection heading="Shoulder and Neck Pain in Remote Employees" para="Shoulder and neck pain are common issues among remote workers, characterized by discomfort or pain in the upper spine and shoulder region. These conditions can range from mild discomfort to severe pain, impacting daily activities and productivity.
" image="/neckpainService.png" />

      <Causes points={["Poor Posture","Lack of Movement","Prolonged Sitting","Screen" , "Muscle Strain","Use of Mobile"]}/>
      <Related points={["Pain from neck strain can radiate to the head, causing tension headaches.","Degenerative changes in the neck vertebrae due to aging or prolonged poor posture.","Reduced mobility and stiffness in the shoulder joint from lack of movement or poor posture.",
        "Chronic pain in the trapezius muscle due to prolonged sitting and poor ergonomics."
      ]} headings={["Tension Headaches","Cervical Spondylosis","Frozen Shoulder","Trapezius Myalgia"]}/>
    </div>
  )
}
