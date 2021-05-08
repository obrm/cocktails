import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <Link to='/'>
          <img src={logo} alt='logo' className='logo' />
        </Link>
        <ul className='nav-links'>
          <li className='hide-md'>
            <Link to='/'>Home</Link>
          </li>
          <li className='hide-sm'>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
