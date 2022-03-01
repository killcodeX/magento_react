import React from 'react'
import './header.css';

export default function HomeHeader() {
  return (
    <div className='home-header'>
        <div className='container d-flex justify-content-center'>
            <div className='header-lists'>
                <a href='/'>Home</a>
                <a href='/categories/mens/3'>Mens</a>
                <a href='/categories/womens/4'>Womens</a>
                <a href='/categories/kids/5'>Kids</a>
                <a href='/categories/ortho/6'>Ortho</a>
                <a href='/categories/best-offers/7'>Best Offers</a>
            </div>
        </div>
    </div>
  )
}
