import React from 'react'
import tab from '../../assets/images/tab.png'
import { Link } from 'react-router-dom'
import './navtabs.css'


const ProductsNav = () => {
  return (
    <div>
        <Link to='/products'>
            <img src={tab} className='postit' alt="products-tab"/>
            <p className='nav-title'>products</p>
        </Link>
    </div>
  )
}

export default ProductsNav