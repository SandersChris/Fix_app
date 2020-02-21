import React from 'react'
import './AppBar.styles.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
    <nav className="navbar">
    <div>
        <Link to='/' className="logo">+</Link>
    </div>
    <ul className="main-nav">
        <li>
            <a href="https://thefixgym.com/" className="nav-links">The Fix Gym</a>
        </li>
        <li>
            <p className="nav-links">Profile</p>
        </li>
        <li>
            <Link to='/caloriezones' className="nav-links">Zones</Link>
        </li>
        <li>
            <a href="https://thefixgym.com/the-fix-life-blog/" className="nav-links">Blog</a>
        </li>
        <div className='signup-login'>
        <li className='login'>
            <p>Log In</p>
        </li>
        <li className='signup'>
            <button className='signup-btn'>Sign Up</button>
        </li>
        </div>
    </ul>
    </nav>
    )
}

export default NavBar