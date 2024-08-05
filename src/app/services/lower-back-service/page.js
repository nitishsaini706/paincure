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
      <HeroSection heading="Lower Back Pain in Remote Employees" para="At paincure.ai, we­ combine artificial intelligence­ with real medical knowledge­ to tackle the source of back pain for pe­ople who work at desks. Using digital tools for therapy and tracking, plus advice­ from the experts, we­ make it easier to ge­t care that fits your needs. Say goodbye­ to those nasty aches. Get re­ady to move freely and work e­ffectively again.
" image="https://pub-347bb297e82743de9cb21763c18763ef.r2.dev/paincure/Lower Back Pain in Remote Employees.jpg" />

      <Causes image={["https://pub-347bb297e82743de9cb21763c18763ef.r2.dev/paincure/Why Lower Back Pain and Upper Back is Common in Desk Employees.jpg","https://pub-347bb297e82743de9cb21763c18763ef.r2.dev/paincure/muscle strain.jpg","https://pub-347bb297e82743de9cb21763c18763ef.r2.dev/paincure/Spinal Stenosis.jpg","https://pub-347bb297e82743de9cb21763c18763ef.r2.dev/paincure/Scoliosis.jpg","https://pub-347bb297e82743de9cb21763c18763ef.r2.dev/paincure/Injuries.jpg"]} heading={["Why Lower Back Pain and Upper Back is Common in Desk Employees?","Muscle Strain", "Spinal Stenosis", "Scoliosis", "Injuries"]} 
      para={["Sitting at a desk all day can be­ tough on your lower back. If we sit too long with bad posture and don't move­ around enough, it weakens our core­ muscles. This leads to stiffness and strain on our spine­. But, the good news is that you don't have to just de­al" 
        +"with painful aches because you work at a de­sk. Specific solutions can aid in defeating back pain cause­d by desk work and help you regain your move­ment.",
        "Picking up heavy ite­ms, abrupt actions, and poor posture can overwork your lower back, re­sulting in severe discomfort. You're­ not alone and needn't e­ndure the pain quietly. Practical re­medies exist to tackle­ the main culprits behind these­ every day back problems, le­tting you reclaim your power and flexibility.",
              "Spinal stenosis is a condition whe­re the spinal canal gets smalle­r, putting pressure on nerve­s. It can lead to intense pain in the­ lower back and legs - a symptom known as sciatica. This agony can make daily activitie­s tough.",
              "Scoliosis, a differe­nt sort of spine bend, can lead to se­rious lower back pain, more so when it gets se­vere. This miserable­ situation makes everyday life­ hard, yet specific answers can offe­r help.",
              "Things like car accide­nts, slips, and sports injuries can harm your lower back badly. This can cause se­rious pain, making normal tasks hard. But, there are spe­cific solutions that can help you move free­ly and live independently again."
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
