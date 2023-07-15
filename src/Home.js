import React from 'react'

import './style/Home.css'

// navbar logo
import navbarLogo from "./assets/images/fotok.jpg"

import { Link } from 'react-router-dom'

import {BsFillArrowRightCircleFill} from 'react-icons/bs'

export const Home = () => {
  return (
    <section className='home-container'>
      <article className='text-container'>
        <h2><span>H</span>ello i'm <br /><strong>Z</strong>aza<br /><strong>Z</strong>ankaidze</h2>
        <h4>Full-stack developer</h4>
        <p> <strong><Link to="/myWork" className='myProj'>Projects</Link></strong>
        </p>
        
      </article>
      <article className='hero-container'>
          <img src={navbarLogo} alt="hero"/>
      </article>
      
    </section>
  )
}
