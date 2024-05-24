import React from 'react'
import './Intro.css'
// import bg from '../../../image/bg.png'
import bg from '../../../image/bgsecond.png'
import { Link } from 'react-scroll'
import hireme from '../../../image/hireme-removebg-preview.png'

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className='hello'>Hello</span>
            <span className="introText">I'm <span className="introName">Dhairya</span> <br />MERN STACK DEVELOPER</span>
            <p className='intrPara'>I am a skilled web designer with experince in creating <br /> visually appealing and user friendly websites</p>
            <Link to='contact'><button className="btn"><img src={hireme} alt="" className='hiremeImg' /> Hire Me</button></Link>
        </div>
        <img src={bg} alt="profile" className='bg'/>
    </section>
  )
}

export default Intro
