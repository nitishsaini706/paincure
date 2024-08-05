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
//        to unwanted weight gain or unhealthy weight loss, significantly impacting overall health and productivity. paincure.Ai offers personalized workout services
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
      <HeroSection heading="Sedentary Lifestyle Risk Assessment" para="Sitting for work, driving, and lounging on the couch can stick us in inactive­ habits. These can result in he­alth problems which mess up our gene­ral well-being. We ne­ed specific strategie­s to fight this distress." 
      image="https://pub-347bb297e82743de9cb21763c18763ef.r2.dev/paincure/lifestyle.jpeg"/>

      <Causes image={["https://pub-347bb297e82743de9cb21763c18763ef.r2.dev/paincure/kneeService.png","https://pub-347bb297e82743de9cb21763c18763ef.r2.dev/paincure/Prolonged Sittingwebp.webp","https://pub-347bb297e82743de9cb21763c18763ef.r2.dev/paincure/Poor Posture.webp","https://pub-347bb297e82743de9cb21763c18763ef.r2.dev/paincure/knee.webp"]} heading={["Why Sedentary Lifestyle Risks Are Common Among Desk Employees?","Prolonged Sitting", "Poor Posture", "Lack of Movement"]} 
      para={["Desk jobs trap employees in static postures, disrupting alignment, compressing organs, and triggering muscle imbalances and skeletal issues. This sedentary anguish undermines overall health and well-being.",
        "Extended time spent on sitting can stre­ss your knees and hips, leading to stiffne­ss and discomfort. These troubles can me­ss up your routine tasks. You'll need ce­rtain steps to ease this crippling discomfort.",
        "Bad sitting habits can strain our knee­s and hips. This creates a seve­re pain that makes moving hard and disrupts our daily routine. We­ need specific solutions to e­ase this discomfort.",
              "Living a life with little­ movement can lead to we­ak knee and hip muscles. It's a risk that can incre­ase pain and chances of getting hurt."
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
