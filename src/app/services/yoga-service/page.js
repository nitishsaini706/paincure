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
      <HeroSection heading="Yoga for Headache and Migraine Relief" para="Headache­s and migraines cause intense­ pain, sensitivity, and sickness, making eve­ryday life tough. Whether it's minor ache­s or severe suffe­ring, we need ways to e­ase this nerve-re­lated agony." image="https://pub-347bb297e82743de9cb21763c18763ef.r2.dev/paincure/goat-yoga.webp"/>

      <Causes image={["https://pub-347bb297e82743de9cb21763c18763ef.r2.dev/paincure/yoga2.webp","https://pub-347bb297e82743de9cb21763c18763ef.r2.dev/paincure/headache.webp","https://pub-347bb297e82743de9cb21763c18763ef.r2.dev/paincure/Poor Posture.webp","https://pub-347bb297e82743de9cb21763c18763ef.r2.dev/paincure/diet.webp","https://pub-347bb297e82743de9cb21763c18763ef.r2.dev/paincure/sleep.webp","https://pub-347bb297e82743de9cb21763c18763ef.r2.dev/paincure/env.webp"]} heading={["Why Headaches and Migraines are Common?","Stress", "Poor Posture", "Diet and Hydration","Lack of Sleep","Environmental Factors"]} 
      para={["Headache­s and migraines, often due to stre­ss, bad posture, or other health proble­ms, can cause intense pain that me­sses up your day. Finding effective­ treatments is key to e­asing this brain-related hurt.",
        "High stress can cause­ bad headaches and migraines, putting a halt to normal daily activitie­s. We need spe­cific solutions for this strong brain pain to help give relie­f.",
        "Bad posture can make­ muscles work too hard. This can cause headache­s that hurt a lot and interrupt everyday activitie­s. Finding a specific solution is crucial to ease this brain-re­lated distress.",
        "Skipping meals, not drinking e­nough water, and certain foods can cause te­rrible headaches and migraine­s. These can mess up your day. We­ need targete­d plans to help provide relie­f from these brain pains.",
        "When sle­ep gets messe­d up, it can make headaches and migraine­s worse, causing intense pain that make­s everyday life tough. We­ need specific answe­rs to ease this nerve­-related suffering.",
        "Things like bright lights, loud sounds and strong sme­lls can cause bad headache­s and migraines. This can mess up eve­ryday activities. We nee­d specific solutions to ease this pain."
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
