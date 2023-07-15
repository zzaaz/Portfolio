import React, {useState} from 'react'



import { Link } from 'react-router-dom'
// navbar logo
import navbarLogo from "./assets/images/z.jpg"

// style 
import './style/Navbar.css'

import { AiOutlineMenuFold, AiFillGithub} from 'react-icons/ai';
import {BsFacebook, BsLinkedin} from 'react-icons/bs'



export const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)

    const toggle = () => {
        setShowNavbar(!showNavbar)
    }

  return (
    <div className='navbar-container'>
        <div className='logo-container'>
            <Link to="/" className='link'>
                <img src={navbarLogo} alt='js logo' className='logo'/>
            </Link>
        </div>
        <nav className={`navbar ${showNavbar ? 'show-navbar' : ""}`}>
            <ul className='nav-list'>
                <li className='list-item'>
                    <Link to="/" onClick={() => toggle()}>Home</Link>
                </li>
                <li className='list-item'>
                    <Link to="/about" onClick={() => toggle()}>About</Link>
                </li>
                <li className='list-item'>
                    <Link to="/skills" onClick={() => toggle()}>Skills</Link>
                </li>
                <li className='list-item'>
                    <Link to="/myWork" onClick={() => toggle()}>Projects</Link>
                </li>
               
                <li className='list-item'>
                    <Link to="/contact" onClick={() => toggle()}>Contact</Link>
                </li>
            </ul>
            <ul className='socials-list'>
                <li>
                    <a href='https://www.facebook.com/zazazankaidze' target='blank'><BsFacebook /></a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/zaza-zankaidze-a82537228/' target='blank'><BsLinkedin /></a>
                </li>
                <li>
                    <a href='https://github.com/zzaaz' target='blank'><AiFillGithub /></a>
                </li>
            </ul>
        </nav>
        <div className='burger-container'>
            <AiOutlineMenuFold className='burger' onClick={() => toggle()}/>
        </div>
    </div>
  )
}

  

