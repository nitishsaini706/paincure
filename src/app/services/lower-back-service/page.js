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
        "Ensure your workstation is set up to promote good posture.",
        "Use chairs with proper lumbar support and position your computer screen at eye level."
      ]
    },
    {
      heading: "Regular Breaks",
      points: [
        "Take short breaks to stand, stretch.",
        "Walk around every 30 minutes to prevent stiffness."
      ]
    },
    {
      heading: "Exercise and Stretching",
      points: [
        "Incorporate exercises that strengthen core muscles and improve flexibility.",
        " Yoga and Pilates are particularly beneficial."
      ]
    },
    {
      heading: "Professional Guidance",
      points: [
        "Consult a healthcare expert or physical therapist who can provide personalized advice, exercises, and treatments tailored to your specific needs."
      ]
    },
    {
      heading: "Maintain a Healthy Lifestyle",
      points: [
        " Adopt a balanced diet, stay hydrated, and manage stress through activities like meditation or mindfulness."
      ]
    }
  ];
  return (
    
    <div>
      <HeroSection heading="Lower Back Pain in Remote Employees" para="Lower back pain is a prevalent condition affecting a significant portion of the population. It can range from a dull, constant ache to a sudden, sharp pain that makes movement difficult. The lower back supports much of the body's weight, and when it experiences strain or injury, it can lead to discomfort and impaired mobility.
" image="/lowerBackService.png" />

      <Causes image={["/lowerBackService.png","/muscle-strain.webp","/Forward Head Posture.webp","/scoliosis.webp","/injury.webp"]} heading={["Why Lower Back Pain and Upper Back is Common in Desk Employees?","Muscle Starin", "Spinal Stenosis", "Scoliosis", "Injuries"]} 
      para={["Lower back pain is especially common among desk employees due to prolonged periods of sitting. Poor posture, inadequate chair support, and a lack of physical activity contribute to muscle stiffness and spinal stress." +
        "The static position maintained during long hours of desk work can weaken core muscles, increasing the risk of developing lower back pain."," One of the most frequent causes of low back pain is muscle strain or overuse. Activities that involve lifting heavy objects," 
       + "sudden movements, or poor posture can lead to strained muscles or ligaments in the lower back.",
        " Spinal stenosis is a condition where the spinal canal narrows, putting pressure on the spinal cord and nerves. This can lead to low back pain, as well as leg pain (sciatica).",
              "Scoliosis is an abnormal curvature of the spine, which can lead to low back pain, especially in more severe cases.",
              "Traumatic incidents like car accidents, falls, or sports injuries can cause damage to the lower back, resulting in pain and discomfort."
      ]}  
      />
      <Related mainHeading={"Potential Serious Conditions Resulting from Neck and Shoulder Pain"} points={["Pain from neck strain can radiate to the head, causing tension headaches.","Degenerative changes in the neck vertebrae due to aging or prolonged poor posture.","Reduced mobility and stiffness in the shoulder joint from lack of movement or poor posture.",
        "Chronic pain in the trapezius muscle due to prolonged sitting and poor ergonomics."
      ]} headings={["Tension Headaches","Cervical Spondylosis","Frozen Shoulder","Trapezius Myalgia"]}/>
         <Banner />
      <ProgramDetails mainHeading={"How to Manage Lower Back Pain Smartly with the Help of a Healthcare Expert"}
       sections={sections}
      />
    </div>
  )
}
