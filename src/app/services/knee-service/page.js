'use client'
import React from 'react'
import HeroSection from "../../../components/HeroSection"
import Causes from '../../../components/Causes'
import Related from '../../../components/Related'

export default function page() {
  return (
    <div>
      <HeroSection heading="Knee and Hip Pain in Remote Employees" para="Knee and hip pain are common issues among remote workers, characterized by discomfort or pain 
      in the knee and hip joints. These conditions can range from mild discomfort to severe pain, impacting daily activities and productivity." 
       image="/kneeService.png" />

      <Causes points={["Repetitive Movements","Poor Ergonomics","Prolonged Sitting","Weight Gain" , "Improper Posture","Sedentary Lifestyle"]}/>
      <Related points={["Degeneration of the knee and hip joints due to aging or wear and tear.","Inflammation of the bursae, small fluid-filled sacs that cushion the knee and hip joints.",
        "Inflammation of the iliotibial band, a ligament that runs along the outside of the thigh from the hip to the knee.","Pain around the kneecap, often caused by improper tracking of the kneecap in its groove.",
        "Inflammation of the tendons around the knee and hip due to overuse or strain."
      ]} headings={["Osteoarthritis","Bursitis","IT Band Syndrome","Patellofemoral Pain Syndrome","Tendonitis"]}/>
    </div>
  )
}