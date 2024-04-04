import React from 'react'
import "./Hero.css"
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
  <div className="hero container">
    <div className="hero-text">
      <h1>We Ensure better education for better world</h1>
      <p>Our cutting-edge curriculam is designed to empower students with the knowledge ,skills m, and exprienmce needed to excel in the dyanamic fiels of education</p>
       <button className="btn">Explore More <img src={dark_arrow} alt="" className="" /></button>
       
    </div>
  </div>
  )
}

export default Hero