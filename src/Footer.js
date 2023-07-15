import React from 'react'

import "./style/Footer.css"

import { Link } from 'react-router-dom'
import CV from './assets/images/CV.pdf'
export const Footer = () => {

  const scrollUp = () => {
    window.scrollTo(0, 0);
  }


  return (
    <div className='footer-container'>
        <div className='contact-link'>
          <div className='CV'>
            <a href={CV} without rel="noopener noreferrer" target="_blank">
              <button trailingIcon="picture_as_pdf" label="Resume">
                Show Cv
              </button>
            </a>
            <a href={CV} download><button>Download CV</button></a>
          </div>
          <Link className='link' to="/contact" onClick={scrollUp}>Contact Me</Link>
          <small>zazazankaidze@gmail.com</small>
        </div>
        <div className='stripes-container'>
          <div className='stripe red'></div>
          <div className='stripe yellow'></div>
          <div className='stripe white'></div>
          <div className='stripe blue'></div>
        </div>
    </div>
  )
}
