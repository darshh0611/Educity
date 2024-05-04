import React, { useState } from 'react'
import Navbar from  './Components/Navbar/Navbar'
import Hero from  './Components/Hero/Hero'
import Programs from  './Components/Programs/Programs'
import Title from  './Components/Title/Title'
import About from  './Components/About/About'
import Campus from  './Components/Campus/Campus'
import Testimonials from  './Components/Testimonials/Testimonials'
import Contact from  './Components/Contact/Contact'
import Video from  './Components/VideoPlayer/Video'

const App = () => {
  const [playState, setPlayState] = useState(false);
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
      <Title SubTitle='OUR PROGRAMS' Title='What we offer'/>
      <Programs/>
      <About setPlayState={setPlayState}/>
      <Title SubTitle='Gallery' Title='Campus Photos'/>
      <Campus/>
      <Title SubTitle='TESTIMONIALS' Title='What student says'/>
      <Testimonials/>
      <Title SubTitle='CONTACT US' Title='Get in touch with us'/>
      <Contact/>
      </div>
      <Video playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App;
