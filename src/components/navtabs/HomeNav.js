import React from 'react'
import tab from '../../assets/images/tab.png'
import { Link } from 'react-router-dom'
import './navtabs.css'


const HomeNav = () => {
  return (
    <div className='nav-container nav-tab home-nav'>
        <Link to='/'>
            <img src={tab} className='postit' alt="home-tab"/>
            <p className='nav-title'>Home</p>
        </Link>
    </div>
  )
}

export default HomeNav