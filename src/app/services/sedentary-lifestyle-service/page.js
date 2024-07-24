// 'use client'
// import React from 'react'
// import HeroSection from "../../../components/HeroSection"
// import Causes from '../../../components/Causes'
// import Related from '../../../components/Related'
// import Banner from '@/components/Banner'

// export default function page() {
//   return (
//     <div className='container'>
//       <HeroSection heading="Sedentary Lifestyle Risk Assessment" para="A sedentary lifestyle among desk employees can lead
//        to unwanted weight gain or unhealthy weight loss, significantly impacting overall health and productivity. Paincure.ai offers personalized workout services
//        designed to address these issues, helping employees achieve their fitness goals and maintain a healthy lifestyle." 
//        image="/lifestyle.jpeg" />

//       <Causes points={["Tight hips and bad back","Poor posture","Sciatic pain","Weight gain" , "Deep vein thrombosis","Increased blood pressure"]}/>
//       <Banner />
//       <Related points={["Excess pressure on the spine and lower back causes chronic pain and muscle atrophy.",
//       "Increased risks of obesity, type 2 diabetes, cardiovascular diseases, and some cancers.",
//         "Poor blood flow can cause swelling, varicose veins, blood clots, and brain fog.",
//         "Prolonged sitting leads to weak hamstrings and glutes, tight quads and hip flexors, poor posture, pain, and injury."
//       ]} headings={["Skeletal Degradation","Chronic Health Risks","Impaired Circulation","Adaptive Muscle Shortening"]}/>
//     </div>
//   )
// }


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
        " Use an ergonomic chair and desk setup to promote better posture."
      ]
    },
    {
      heading: "Frequent Breaks",
      points: [
        "Stand up, stretch, and walk around every 30 minutes.",
        " Incorporate regular breaks to stand, stretch, and move around to alleviate stiffness."
      ]
    },
    {
      heading: "Physical Activity",
      points: [
        "Incorporate regular exercise into your daily routine, such as walking, stretching, or yoga."
      ]
    },
    {
      heading: "Balanced Diet",
      points: [
        "Maintain a balanced diet to prevent unnecessary weight gain and weight loss, and stay hydrated to support overall health."
      ]
    },
    {
      heading: "Healthcare Expert Consultation",
      points: [
        "Work with a healthcare expert to develop a personalized plan that addresses your specific needs and risk factors."
      ]
    }
  ];
  return (
    
    <div>
      <HeroSection heading="Sedentary Lifestyle Risk Assessment" para="A sedentary lifestyle, characterized by prolonged sitting, is increasingly common among desk employees. Whether working at a desk, driving, or relaxing on the couch, many people spend approximately 7.5 hours a day seated. This lack of movement can lead to a variety of health issues that significantly impact overall well-being." 
      image="/lifestyle.jpeg"/>

      <Causes image={["/kneeService.png","/Prolonged Sittingwebp.webp","/Poor Posture.webp","/knee.webp"]} heading={["Why Sedentary Lifestyle Risks Are Common Among Desk Employees?","Prolonged Sitting", "Poor Posture", "Lack of Movement"]} 
      para={["Desk employees are particularly susceptible to the risks associated with a sedentary lifestyle due to the nature of their work. Extended periods of sitting in one position disrupt the body's natural alignment, leading to muscle imbalances and skeletal issues. This static posture also compresses internal organs, affecting circulation, digestion, and metabolic function.",
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
