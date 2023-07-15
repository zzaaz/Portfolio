import React from 'react'

import './style/About.css'
import erasmus from "./assets/images/erasmus.png"
import omedia from "./assets/images/omedia.jpg"
import btu from "./assets/images/btu.png"

export const About = () => {
  return (
    <div className='about-container'>
      <h3 >Who am I ?</h3>
      <article className='about-text-container'>
        <div className='text-border'>  <p>My name is Zaza, I am a junior Back-end Developer at Omedia Developement. My main responsibilities consist of upgrading legacy Java and Spring applications to Spring boot, modernize and integrate them into company's modern ecosystem. Additionally, I create applications using html, css, js and React for my own liking.</p></div>
        <div> <a href="https://omedia.dev/" target="_blank"><img src={omedia} alt='omedia'  /></a> </div>
      </article>
      <article className='about-text-container'>
        <div > <a href="https://btu.edu.ge/"  target="_blank"><img src={btu} alt='btu' /></a> </div >
        <div className='text-border'><p> From 2019 I've been a bachelor student for 2 years at Free University of Tbilisi, and now I am a Bachelor student of Information Technologies at BTU University in Georgia and I am constantly trying to develop myself to become junior full-stack developer</p></div>
        
      </article>
      <article className='about-text-container'>
        <div className='text-border'><p> I am actively participating in projects related to youth work, volunteering for local communities and involved in Erasmus+ exchange training courses taking places all over the Europe.  </p>
        </div>
        <div><a href='https://erasmus-plus.ec.europa.eu/' target="_blank" > <img src={erasmus} alt='erasmus' /></a></div>
      </article>
    </div>
  )
}
