import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import '../Components/style.css'

export default function Layaout() {
  return (
    <>
      <header className='header'>
        <NavLink to='/' className={({ isActive }) => isActive ? 'active' : ''}>Homepage</NavLink>
        <NavLink to='/post'>Post</NavLink>
        <NavLink to='/about'>About us</NavLink>
      </header>

      <Outlet />


      <footer className='footer'>React tutorial <strong>From kalys</strong> <a href="tel">+996509405075</a></footer>
    </>

  )
}
