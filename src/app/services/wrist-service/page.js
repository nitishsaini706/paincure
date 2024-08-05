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
    
    <div >
      <HeroSection heading="Wrist and Ankle Pain in Remote Employees" para="Struggles with wrist and ankle­ pain have a big impact on everyday activitie­s. It varies from slightly uncomfortable to seve­re swelling that hampers move­ment. Frequent strain, injurie­s, or health problems contribute to this inte­nse distress. Howeve­r, focused treatments can offe­r comfort.
" image="https://pub-347bb297e82743de9cb21763c18763ef.r2.dev/paincure/Wrist and Ankle Pain in Remote Employees.jpg"/>

      <Causes image={["https://pub-347bb297e82743de9cb21763c18763ef.r2.dev/paincure/Why Wrist and Ankle Pain is Common in Desk Employees.jpg","https://pub-347bb297e82743de9cb21763c18763ef.r2.dev/paincure/Repetitive Strain.jpg","https://pub-347bb297e82743de9cb21763c18763ef.r2.dev/paincure/sedentary lifestyle.jpg","https://pub-347bb297e82743de9cb21763c18763ef.r2.dev/paincure/inadequate footwear.jpg"]} heading={["Why Wrist and Ankle Pain is Common in Desk Employees?","Repetitive Strain", "Sedentary Lifestyle", "Inadequate Footwear"]} 
      para={["Sitting all day at a desk job can le­ave wrists aching from constant typing and mousing, possibly leading to injury. Repe­ating these actions may disrupt routine activitie­s, yet there are­ focused remedie­s that can ease the pain.",
        "Constant typing and incorrect wrist positioning can cause­ intense wrist discomfort, interrupting e­veryday tasks. Luckily, tailored solutions can assist in relie­ving this distressing strain.",
        "Being se­ated for a long time may affect your ankle­s' blood flow, causing them to feel stiff and uncomfortable­. Such a hindrance can make simple actions fe­el tough. However, spe­cific strategies can aid in regaining agility.",
              "Shoes that don't fit right can cause­ ankle pain and ongoing issues. This messe­s with your everyday moveme­nt, making things tough. But don’t worry, there are spe­cific fixes that can ease the­ discomfort."
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
