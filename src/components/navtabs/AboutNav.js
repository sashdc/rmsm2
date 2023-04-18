import React from 'react'
import tab from '../../assets/images/tab.png'
import { Link } from 'react-router-dom'
import './navtabs.css'


const AboutNav = () => {
  return (
    <div className='nav-container nav-tab about-nav'>
        <Link to='/about'>
            <img src={tab} className='postit' alt="about-tab"/>
            <p className='nav-title'>About</p>
        </Link>
    </div>
  )
}

export default AboutNav