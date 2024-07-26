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
        "Ensure your workspace promotes proper posture and alignment.",
        "Use chairs with good lumbar support and adjustable settings."
      ]
    },
    {
      heading: "Regular Movements",
      points: [
        "Take short breaks to stand, stretch.",
        " Incorporate regular breaks to stand, stretch, and move around to alleviate stiffness."
      ]
    },
    {
      heading: "Strengthening and Flexibility Exercises",
      points: [
        " Engage in exercises that target the muscles supporting the knees and hips to maintain strength and flexibility.",
        " Yoga and Pilates are particularly beneficial."
      ]
    },
    {
      heading: "Professional Consultation",
      points: [
        "Consult healthcare experts or physical therapists for personalized exercise and treatment plans."
      ]
    },
    {
      heading: "Weight Management",
      points: [
        "Maintain a healthy weight to reduce the stress on your knee and hip joints."
      ]
    }
  ];
  return (
    
    <div>
      <HeroSection heading=" Knee and Hip Pain in Remote Employees" para="Knee and hip pain are common complaints that can affect your mobility and overall quality of life. These pains can be caused by various factors, including injury, overuse, or underlying medical conditions. Symptoms may include pain, stiffness, swelling, and reduced range of motion." 
      image="/kneeMain.webp"/>

      <Causes image={["/kneeService.png","/Prolonged Sittingwebp.webp","/Poor Posture.webp","/knee.webp"]} heading={["Why Knee and Hip Pain are Common in Desk Employees?","Prolonged Sitting", "Poor Posture", "Lack of Movement"]} 
      para={["Knee joint is the biggest joint in our body and works as a connection between the hip and the foot. It helps in transmitting the load of the body from the hip and core to our feet and thus allows us to stand , move and balance. .",
        "Sitting for long periods can lead to stiffness and discomfort in the knees and hips.",
        "Incorrect sitting posture can put undue stress on the knee and hip joints.",
              "A sedentary lifestyle can weaken the muscles around the knees and hips, making them more susceptible to pain and injury."
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
