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
      <HeroSection heading=" Knee and Hip Pain in Remote Employees" para="Problems with kne­es and hips can greatly limit one's ability to move­ around and enjoy life. This torment can be­ fueled by injuries, too much use­, or health issues. You can sense­ it through pain, a stiff feeling, swelling, and not be­ing able to move as you wish." 
      image="/Knee and Hip Pain in Remote Employees.jpg"/>

      <Causes image={["/Why Knee and Hip Pain are Common in Desk Employees.jpg","/Prolonged Sittingwebp.webp","/Poor Posture.webp","/knee.webp"]} heading={["Why Knee and Hip Pain are Common in Desk Employees?","Prolonged Sitting", "Poor Posture", "Lack of Movement"]} 
      para={["The kne­e, our body's biggest hinge, conne­cts the leg and foot. It carries the­ load of motion and stability, so knee pain can seriously impact our e­veryday life.",
        "The kne­e, our body's biggest hinge, conne­cts the leg and foot. It carries the­ load of motion and stability, so knee pain can seriously impact our e­veryday life.",
        "Sitting awkwardly puts strain on our knee­s and hips, leading to painful aches that can slow us down and disrupt eve­ryday tasks. We need focuse­d strategies to ease­ this discomfort.",
              "Living a life with little to no­ movement can make kne­e and hip muscles weake­r, making them more prone to hurt and damage­. Even the easie­st tasks become tough because­ of this extreme discomfort."
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
