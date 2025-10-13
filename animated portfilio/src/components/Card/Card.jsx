import React from 'react'
import './Card.css'

function Card({ title, image, description, liveLink, githubLink, variant = "about" }) {
  
  // ABOUT VERSION (same as before)
  if (variant === "about") {
    return (
      <div className='card about-card'>
        <h1>{title}</h1>
        <div className='hovercard'>
          <img src={image} alt={title} />
        </div>
      </div>
    )
  }

  // PROJECT VERSION (flip effect)
  return (
    <div className='card project-card'>
      <div className='card-inner'>
        <div className='card-front'>
          <h1>{title}</h1>
        </div>
        <div className='card-back'>
          <p className='card-desc'>{description}</p>
          <div className='card-buttons'>
            <a href={liveLink} target='_blank' rel='noopener noreferrer' className='btn live-btn'>
              Live View
            </a>
            <a href={githubLink} target='_blank' rel='noopener noreferrer' className='btn github-btn'>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
