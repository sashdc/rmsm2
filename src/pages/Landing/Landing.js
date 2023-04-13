import React from 'react'
import fax from '../../assets/images/fax.png'
import stamp from '../../assets/images/stamp.png'


const Landing = () => {
  return (
    <div className='main-container '>
        <img src={fax} alt="fax paper" className='fax-paper'/>
        <img src={stamp} alt="logo stamp" className='logo-stamp'/>
    </div>
  )
}

export default Landing