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
      heading: "Ergonomic Improvements",
      points: [
        "Adjust your workspace to ensure proper posture.",
        "Use chairs with good support", 
        "Position monitors at eye level",
         "Use ergonomic keyboards and mice."
      ]
    },
    {
      heading: "Regular Movement",
      points: [
        "Take frequent breaks to stretch and move around, reducing muscle tension."
      ]
    },
    {
      heading: "Strengthening Exercises",
      points: [
        "Engage in exercises that strengthen neck and shoulder muscles.",
        "Focus on maintaining flexibility and reducing strain."
      ]
    },
    {
      heading: "Professional Consultation",
      points: [
        "Seek advice from healthcare experts or physical therapists for personalized exercise plans and treatments."
      ]
    },
    {
      heading: "Stress Management",
      points: [
        "Incorporate stress-relieving activities like deep breathing, meditation, or gentle yoga to alleviate muscle tension."
      ]
    }
  ];
  return (
    
    <div>
      <HeroSection heading="Shoulder and Neck Pain in Remote Employees" para="Shoulder and neck pain are common issues among remote workers, characterized by discomfort or pain in the upper spine and shoulder region. These conditions can range from mild discomfort to severe pain, impacting daily activities and productivity.
" image="/neckPainMain.webp" />

      <Causes image={["/neckpainService.png","/poorErgonomics.jpg","/Forward Head Posture.webp","/repetitivemotiondisorder.jpg.webp"]} heading={["Why Neck and Shoulder Pain is Common in Desk Employees?","Poor Ergonomics", "Forward Head Posture", "Repetitive Movements"]} 
      para={["Desk employees are particularly susceptible to neck and shoulder pain due to extended periods of sitting and working on computers."," Inadequate chair support, improper monitor height, and poor desk setup can strain neck and shoulder muscles.",
        " Leaning forward to view screens or documents places excessive stress on the neck and shoulder muscles.",
              "Continuous use of keyboards and mice without breaks can lead to muscle fatigue and tension."
      ]}  
      />
      <Related mainHeading={"Potential Serious Conditions Resulting from Neck and Shoulder Pain"} points={["Pain from neck strain can radiate to the head, causing tension headaches.","Degenerative changes in the neck vertebrae due to aging or prolonged poor posture.","Reduced mobility and stiffness in the shoulder joint from lack of movement or poor posture.",
        "Chronic pain in the trapezius muscle due to prolonged sitting and poor ergonomics."
      ]} headings={["Tension Headaches","Cervical Spondylosis","Frozen Shoulder","Trapezius Myalgia"]}/>
         <Banner />
      <ProgramDetails mainHeading={"How to Manage Neck and Shoulder Pain Smartly with the Help of a Healthcare Expert"}
       sections={sections}
      />
    </div>
  )
}
