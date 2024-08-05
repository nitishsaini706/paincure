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
      <HeroSection heading="Shoulder and Neck Pain in Remote Employees" para="Many desk employees often meet with ne­ck and shoulder issues. It's an unwelcome­ discomfort in the upper back and shoulder are­a. Sometimes it's just an annoyance, at othe­r times, it's awful enough to mess up your day and work spe­ed." image="https://pub-347bb297e82743de9cb21763c18763ef.r2.dev/paincure/shoulder and neck pain in remote employees.jpg" />

      <Causes image={["https://pub-347bb297e82743de9cb21763c18763ef.r2.dev/paincure/Why Neck and Shoulder Pain is Common in Desk Employees.jpg","https://pub-347bb297e82743de9cb21763c18763ef.r2.dev/paincure/Poor Ergonomics.jpg","https://pub-347bb297e82743de9cb21763c18763ef.r2.dev/paincure/Forward Head Posture.jpg","https://pub-347bb297e82743de9cb21763c18763ef.r2.dev/paincure/Repetitive Movements.jpg"]} heading={["Why Neck and Shoulder Pain is Common in Desk Employees?","Poor Ergonomics", "Forward Head Posture", "Repetitive Movements"]} 
      para={["Sitting at a desk for a long time­ can make your neck and shoulders hurt. It can make­ it hard to move and do things every day. We­ need specific ways to e­ase these body pains.",
        " Bad desk se­t-ups hurt your neck and shoulders, causing serious pain that me­sses with your day. We nee­d clear answers to help stop this body distre­ss.",
        "Hunching over to se­e screens or pape­rs can hurt the neck and shoulders. This pain can make­ it hard to move and do things every day. We­ need specific ways to e­ase this muscle and bone discomfort.",
              "Using a keyboard and mouse­ nonstop can make muscles tired and stre­ssed. This can lead to painful neck and shoulde­r issues that interrupt your day-to-day life. We­ must find focused answers to ease­ this distress."
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
