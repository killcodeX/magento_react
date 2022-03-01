import React from 'react'
import './header.css';

export default function HomeHeader() {
  return (
    <div className='home-header'>
        <div className='container d-flex justify-content-center'>
            <div className='header-lists'>
                <a href='/'>Home</a>
                <a href='/category/mens'>Mens</a>
                <a href='/category/womens'>Womens</a>
                <a href='/category/kids'>Kids</a>
                <a href='/category/ortho'>Ortho</a>
                <a href='/category/best-offers'>Best Offers</a>
            </div>
        </div>
    </div>
  )
}
