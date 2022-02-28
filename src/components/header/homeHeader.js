import React from 'react'
import './header.css';

export default function HomeHeader() {
  return (
    <div className='home-header'>
        <div className='container d-flex justify-content-center'>
            <div className='header-lists'>
                <a href='/'>Home</a>
                <a href='/mens'>Mens</a>
                <a href='/womens'>Womens</a>
                <a href='/kids'>Kids</a>
                <a href='/ortho'>Ortho</a>
                <a href='/best-offers'>Best Offers</a>
            </div>
        </div>
    </div>
  )
}
