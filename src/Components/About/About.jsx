import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} className='about-image' alt="" />
        <img src={play_icon} className='play-icon' alt="" onClick={()=>{setPlayState(true)}} />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nuturing Tomorrow's Leaders Today</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Dignissimos voluptas error ullam quasi corporis aperiam repudiandae ab enim accusantium autem molestias, 
             quae fuga praesentium eaque rem, officiis delectus optio atque!</p>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Dignissimos voluptas error ullam quasi corporis aperiam repudiandae ab enim accusantium autem molestias, 
             quae fuga praesentium eaque rem, officiis delectus optio atque!</p>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Dignissimos voluptas error ullam quasi corporis aperiam repudiandae ab enim accusantium autem molestias, 
             quae fuga praesentium eaque rem, officiis delectus optio atque!</p>
      </div>
    </div>
  )
}

export default About
