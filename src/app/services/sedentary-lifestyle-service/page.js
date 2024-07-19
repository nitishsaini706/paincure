'use client'
import React from 'react'
import HeroSection from "../../../components/HeroSection"
import Causes from '../../../components/Causes'
import Related from '../../../components/Related'
import Banner from '@/components/Banner'

export default function page() {
  return (
    <div className='container'>
      <HeroSection heading="Sedentary Lifestyle Risk Assessment" para="A sedentary lifestyle among desk employees can lead
       to unwanted weight gain or unhealthy weight loss, significantly impacting overall health and productivity. Paincure.ai offers personalized workout services
       designed to address these issues, helping employees achieve their fitness goals and maintain a healthy lifestyle." 
       image="/lifestyle.jpeg" />

      <Causes points={["Tight hips and bad back","Poor posture","Sciatic pain","Weight gain" , "Deep vein thrombosis","Increased blood pressure"]}/>
      <Banner />
      <Related points={["Excess pressure on the spine and lower back causes chronic pain and muscle atrophy.",
      "Increased risks of obesity, type 2 diabetes, cardiovascular diseases, and some cancers.",
        "Poor blood flow can cause swelling, varicose veins, blood clots, and brain fog.",
        "Prolonged sitting leads to weak hamstrings and glutes, tight quads and hip flexors, poor posture, pain, and injury."
      ]} headings={["Skeletal Degradation","Chronic Health Risks","Impaired Circulation","Adaptive Muscle Shortening"]}/>
    </div>
  )
}