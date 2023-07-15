import React from 'react'


import './style/Skills.css'

import html from './assets/images/html.png'
import css from './assets/images/css.png'
import javascript from "./assets/images/javascript.png"
import xml from "./assets/images/xml.avif"
import kotlin from "./assets/images/kotlin.jpg"
import github from "./assets/images/github.png"
import apache from "./assets/images/apache.png"
import Postgresql_elephant from "./assets/images/Postgresql_elephant.svg.png"
import sql from "./assets/images/sql.png"
import spring from "./assets/images/spring.png"
import react from "./assets/images/react.png"

export const Skills = () => {
  return (
    <section className='skills-container'>
      <article className='techlogogies-list'>
        <h2>TECHNOLOGIES I USE</h2>
        <h4>Front-end</h4>
        <ul className='list'>
          <li className='item'>
            <img src={html} alt='html' />
          </li>
          <li className='item'>
            <img src={css} alt='css' />
          </li>
          <li className='item'>
            <img src={javascript} alt='javascript' />
          </li>
          <li className='item'>
            <img src={react} alt='react' />
          </li>
          <li className='item'>
            <img src={xml} alt='xml' />
          </li>
        </ul>
        <h4>Back-end</h4>
        <ul className='list'>
          <li className='item'>
            <img src={github} alt='github' />
          </li>
          <li className='item'>
            <img src={kotlin} alt='kotlin' />
          </li>
          <li className='item'>
            <img src={apache} alt='apache' />
          </li>
          <li className='item'>
            <img src={Postgresql_elephant} alt='elephant' />
          </li>
          <li className='item'>
            <img src={sql} alt='sql' />
          </li>
          <li className='item'>
            <img src={spring} alt='spring' />
          </li>
        </ul>
      </article>
    </section>
  )
}

