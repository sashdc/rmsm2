import React from 'react'
import tab from '../../assets/images/tab.png'
import { Link } from 'react-router-dom'
import './navtabs.css'

const ContactNav = () => {
  return (
    <div className='nav-container nav-tab contact-nav'>
        <Link to='/contact'>
            <img src={tab} className='postit' alt="contact-tab"/>
            <p className='nav-title'>contact</p>
        </Link>
    </div>
  )
}

export default ContactNav