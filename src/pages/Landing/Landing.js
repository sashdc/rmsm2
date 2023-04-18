import React from 'react'
import fax from '../../assets/images/fax.png'
import stamp from '../../assets/images/stamp.png'
import AboutNav from '../../components/navtabs/AboutNav'
import PartnersNav from '../../components/navtabs/PartnersNav'
import './landing.css'
import "animate.css";


const Landing = () => {
  return (
    <div className='main-container animate__animated animate__fadeInUp  '>
        <img src={fax} alt="fax paper" className='fax-paper '/>
        <img src={stamp} alt="logo stamp" className='logo-stamp'/>
        <div className="about-nav nav-tab">
          <AboutNav />
          </div>
          <div className="partners-nav nav-tab">
          <PartnersNav />
          </div>
    </div>
  )
}

export default Landing