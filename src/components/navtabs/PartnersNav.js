import React from 'react'
import tab from '../../assets/images/tab.png'
import { Link } from 'react-router-dom'
import './navtabs.css'


const PartnersNav = () => {
  return (
    <div>
        <Link to='/partners'>
            <img src={tab} className='postit' alt="partners-tab"/>
            <p className='nav-title'>Partners</p>
        </Link>
    </div>
  )
}

export default PartnersNav