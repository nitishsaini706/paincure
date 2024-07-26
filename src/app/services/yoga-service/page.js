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
      heading: "Stress Reduction",
      points: [
        "Yoga promotes relaxation and reduces stress",
        "A common trigger for headaches and migraines"
      ]
    },
    {
      heading: "Improved Posture",
      points: [
        "Yoga poses help correct posture",
        "Reducing muscle tension and related headaches."
      ]
    },
    {
      heading: "Enhanced Circulation",
      points: [
        "Yoga improves blood flow",
        "Alleviate headache symptoms"
      ]
    },
    {
      heading: "Mindfulness and Relaxation",
      points: [
        "Regular yoga practice supports overall physical and mental health",
        "Potentially reducing headache and migraine occurrences"
      ]
    }
  ];
  return (
    
    <div >
      <HeroSection heading="Yoga for Headache and Migraine Relief" para="Headaches and migraines are common neurological conditions that can cause significant discomfort and disrupt daily activities. While headaches can range from mild to severe, migraines are often characterized by intense, throbbing pain, sensitivity to light and sound, and sometimes nausea." image="/goat-yoga.webp"/>

      <Causes image={["/yoga2.webp","/headache.webp","/Poor Posture.webp","/diet.webp","/sleep.webp","/env.webp"]} heading={["Why Headaches and Migraines are Common?","Stress", "Poor Posture", "Diet and Hydration","Lack of Sleep","Environmental Factors"]} 
      para={["migraines are often characterized by intense, throbbing pain, sensitivity to light and sound, and sometimes nausea","High levels of stress can lead to tension headaches and trigger migraines","Incorrect posture, especially when sitting at a desk, can cause muscle tension leading to headaches","Skipping meals, dehydration, and consuming certain foods or beverages can trigger headaches and migraines.","Inadequate or irregular sleep patterns can contribute to the frequency and severity of headaches and migraines.","Exposure to bright lights, loud noises, or strong smells can act as triggers."
      ]}  
      />
      <Related mainHeading={"Potential Serious Conditions Resulting from Untreated Headaches and Migraines"} points={["Occurrence of migraine attacks for 15 or more days a month.","Resulting from the excessive use of headache medications.","Persistent pain can contribute to mental health issues.",
        "Frequent pain can interfere with daily activities and productivity."
      ]} headings={["Chronic Migraine","Medication Overuse Headache","Depression and Anxiety","Reduced Quality of Life"]}/>
         <Banner />
      <ProgramDetails mainHeading={"How to Manage and Reduce Headache and Migraine Risks with Yoga"}
       sections={sections}
      />
    </div>
  )
}
