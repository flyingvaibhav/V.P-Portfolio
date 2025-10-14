import React from 'react'
import Card from '../Card/Card'
import './Projects.css'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

function Projects() {
  useGSAP(()=>{
   gsap.from("#para",{
    y: -100,
    duration: 1,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger:{
      trigger:"#para",
      scroll:'body',
      scrub:2,
      start:'top 50%',
      end:'top 30%' 

 }})
})
  return (
    <div id='projects'>
      <h1 id='para'>Industry Experience Projects</h1>
      <div className='slider'>
        <Card
          title="Tasklyst"
          description="An animated To-Do web app with a clean UI, smooth micro-interactions, and LocalStorage support — built using HTML, CSS, and JavaScript to showcase frontend design skills.."
          liveLink="https://flyingvaibhav.github.io/Tasklyst/"
          githubLink="https://github.com/flyingvaibhav/Tasklyst"
          variant="project"
        />
        <Card
          title="SKILLBRIDGE"
          description="SkillBridge uses artificial intelligence to tailor learning experiences, optimize study plans, and empower users to achieve their goals faster."
          liveLink="#"
          githubLink="https://github.com/flyingvaibhav/SkillBridge"
          variant="project"
        />
        <Card
          title="SYNCVERSE"
          description="A real-time chat app built with the MERN stack featuring instant messaging, secure authentication, and live notifications with a modern responsive UI."
          liveLink="https://syncverse-wdz7.onrender.com"
          githubLink="https://github.com/flyingvaibhav/Syncverse"
          variant="project"
        />
        <Card
          title="LEXORA"
          description="A sleek English dictionary app with instant search, audio pronunciation, synonyms, theme toggle, and daily word suggestions."
          liveLink="https://flyingvaibhav.github.io/lexora/"
          githubLink="https://github.com/flyingvaibhav/lexora"
          variant="project"
        />
        <Card
          title="PORTFOLIO"
          description="A dynamic portfolio web app developed with React, featuring reusable components, smooth animations, and optimized performance to reflect my front-end development skills."
          liveLink="http://localhost:5174/"
          githubLink="https://github.com/flyingvaibhav/V.P-Portfolio"
          variant="project"
        />
      </div>
    </div>
  )
}

export default Projects
