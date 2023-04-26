import React from 'react'
import AboutNav from './navtabs/AboutNav'
import ContactNav from './navtabs/ContactNav'
import PartnersNav from './navtabs/PartnersNav'
import ProductsNav from './navtabs/ProductsNav'
import HomeNav from './navtabs/HomeNav'
import './navbar.css'


const NavBar = () => {
  return (
    <div className='nav-bar'>
        <AboutNav />
                <PartnersNav />
        <ProductsNav />
        <ContactNav />
        <HomeNav />
    </div>
  )
}

export default NavBar