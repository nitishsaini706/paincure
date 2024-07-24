'use client'
import React from 'react'
import HeroSection from "../../../components/HeroSection"
import Causes from '../../../components/Causes'
import Related from '../../../components/Related'
import Banner from '@/components/Banner'
import ProgramDetails from '@/components/solution'
export default function page() {
  const sections = [
    {
      heading: "Ergonomic Adjustments",
      points: [
        " Ensure your workspace is set up to promote proper wrist alignment.",
        "Use ergonomic keyboards, mice, and wrist supports."
      ]
    },
    {
      heading: "Regular Movements",
      points: [
        "Take short breaks to stand, stretch.",
        "Incorporate frequent breaks to stretch and move your wrists and ankles, reducing stiffness and improving circulation."
      ]
    },
    {
      heading: "Strengthening and Flexibility Exercises",
      points: [
        "Engage in exercises that target the muscles and tendons of the wrists and ankles to maintain strength and flexibility.",
        " Yoga and Pilates are particularly beneficial."
      ]
    },
    {
      heading: "Professional Consultation",
      points: [
        "Seek advice from healthcare experts or physical therapists for personalized exercise plans and treatments."
      ]
    },
    {
      heading: "Proper Footwear",
      points: [
        "Choose supportive and comfortable shoes to prevent and alleviate ankle pain."
      ]
    }
  ];
  return (
    
    <div>
      <HeroSection heading="Wrist and Ankle Pain in Remote Employees" para="Wrist and ankle pain can significantly impact daily activities and overall mobility. These types of pain are often due to repetitive strain, injury, or underlying medical conditions. Symptoms can range from mild discomfort to severe pain, swelling, and limited movement.
" image="/wristPainService.png"/>

      <Causes image={["/Repetitive Strain.webp","/Repetitive Strain2.webp","/Sedentary Lifestyle.webp","/Inadequate Footwear.webp"]} heading={["Why Wrist and Ankle Pain is Common in Desk Employees?","Repetitive Strain", "Sedentary Lifestyle", "Inadequate Footwear"]} 
      para={[" Spending hours on end at a desk, typing away on a keyboard, or using a mouse can put significant strain on our wrists and lead to discomfort and even injury."," Continuous typing, mouse usage, and improper wrist positioning can lead to wrist pain.",
        "Prolonged sitting can cause poor circulation and stiffness in the ankles.",
              "Wearing improper shoes can lead to ankle discomfort and long-term issues."
      ]}  
      />
      <Related mainHeading={"Potential Serious Conditions Resulting from Neck and Shoulder Pain"} points={["Pain from neck strain can radiate to the head, causing tension headaches.","Degenerative changes in the neck vertebrae due to aging or prolonged poor posture.","Reduced mobility and stiffness in the shoulder joint from lack of movement or poor posture.",
        "Chronic pain in the trapezius muscle due to prolonged sitting and poor ergonomics."
      ]} headings={["Tension Headaches","Cervical Spondylosis","Frozen Shoulder","Trapezius Myalgia"]}/>
         <Banner />
      <ProgramDetails mainHeading={"How to Manage Wrist and Ankle Pain Smartly with the Help of a Healthcare Expert"}
       sections={sections}
      />
    </div>
  )
}
