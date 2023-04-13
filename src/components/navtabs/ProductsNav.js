import React from 'react'
import tab from '../../../assets/images/tab.png'
import { Link } from 'react-router-dom'
import './navtabs.css'


const ProductsNav = () => {
  return (
    <div>
        <Link to='/poducts'>
            <img src={tab} className='postit' alt="poducts-tab"/>
            <p className='nav-title'>poducts</p>
        </Link>
    </div>
  )
}

export default ProductsNav