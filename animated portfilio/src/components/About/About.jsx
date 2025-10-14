import React from 'react'
import './About.css'
import Card from '../Card/Card'
import mern2 from '../../assets/MERN.png'
import python from '../../assets/PYTHON.png'
import dsa from '../../assets/DSA.png'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
function About() {
 useGSAP(()=>{
  gsap.from(".circle",{
    x: -100,
    duration: 1,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger:{
      trigger:".circle",
      scroll:'body',
      scrub:2,
      start:'top 50%',
      end:'top 30%' 

 }
}
)
gsap.from(".line",{
    x: -100,
    duration: 1,
    opacity: 0,
    stagger: 1,
    scrollTrigger:{
      trigger:".line",
      scroll:'body',
      scrub:2,
      start:'top 60%',
      end:'top 30%' 

 }})
gsap.from(".aboutdetail h1",{
    x: -100,
    duration: 1,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger:{
      trigger:".aboutdetail h1",
      scroll:'body',
      scrub:2,
      start:'top 50%',
      end:'top 30%' 

 }})
 gsap.from(".aboutdetail ul",{
    x : 100,
    duration: 1,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger:{
      trigger:".aboutdetail ul",
      scroll:'body',
      scrub:2,
      start:'top 50%',
      end:'top 30%' 

 }})
 gsap.from(".rightabout",{
    x: 100,
    duration: 1,
    opacity: 0,
    stagger: 1,
    scrollTrigger:{
      trigger:".rightabout",
      scroll:'body',
      scrub:2,
      start:'top 60%',
      end:'top 30%' 

 }})

  })

  return (
    <div id='about'>

      <div className="leftabout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>
        <div className="aboutdetail">
          <div className="personalinfo">
            <h1>PERSONAL INFORMATION</h1>
            <ul>
              <li><span>NAME:</span> VAIBHAV PANDEY</li>
              <li><span>AGE:</span> 20</li>
              <li><span>GENDER:</span> MALE</li>
              <li><span>NATIONALITY:</span> INDIAN</li>
              <li><span>LANGUAGES:</span> HINDI, ENGLISH</li>
            </ul>
          </div>
           <div className="EDUCATION">
            <h1>EDUCATION</h1>
            <ul>
              <li><span>DEGREE:</span> BACHELOR OF TECHNOLOGY</li>
              <li><span>BRANCH:</span> COMPUTER SCIENCE & ENGINEERING</li>
              <li><span>COLLEGE:</span> PRANVEER SINGH INSTITUTE OF TECHNOLOGY</li>
              <li><span>YEAR OF PASSING:</span> 2027</li>
            </ul>
          </div>
          <div className="SKILLS">
            <h1>SKILLS</h1>
            <ul>
              <li><span> LANGUAGES:</span>C++,PYTHON,JAVASCRIPT,JAVA</li>
              <li><span>FRAMEWORKS:</span>REACT, NODEJS, EXPRESS</li>
              <li><span>DSA:</span> DATA STRUCTURES &  ALGORITHMS</li>
              <li><span>OTHER SKILLS:</span> GIT, SQL,POSTMAN,GITHUB</li>
              <li><span>CORE SKILLS:</span> DBMS, OS,AND NETWORKING</li>
             
            </ul>
          </div>  
        </div>
      </div>

      <div className="rightabout">
       <Card title={"MERN STACK DEVELOPER"} image={mern2} variant="about" />
<Card title={"PYTHON"} image={python} variant="about" />
<Card title={"DATA STRUCTURE"} image={dsa} variant="about" />

      </div>
    </div>
  )
}

export default About