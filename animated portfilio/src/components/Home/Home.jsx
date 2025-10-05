import React from 'react'
import './Home.css'
import man from '../../assets/man2.png'
import { TypeAnimation } from 'react-type-animation';


function Home() {
  return (
    <div id='home'>
<div className='lefthome'>
  <div className="homedetails">
    <div className="line1">I 'M</div>
    <div className="line2">VAIBHAV PANDEY</div>
    <div className="line3"> <TypeAnimation
              sequence={[
      'SOFTWARE DEVELOPER',
      1500, // You can also increase the pause time here
      'MERN STACK DEVELOPER',
      1500, // And here
    ]}
              wrapper="span" // The wrapper element, can be a 'div', 'p', or 'span'
              speed={35}     // Typing speed
              style={{ fontSize: '1em', display: 'inline-block' }} // Basic styling
              repeat={Infinity} // This will make the animation repeat indefinitely
            />
       
       
      </div>
      <div>
      <button className='btn hirebtn'>Hire Me</button>
      </div>
  </div>
  
</div>
<div className='righthome'>
<img src={man} alt="" />


</div>

    </div>
  )
}

export default Home