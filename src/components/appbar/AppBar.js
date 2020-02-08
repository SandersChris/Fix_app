import React from 'react'
import './AppBar.styles.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
    <nav className="navbar">
    <span className="navbar-toggle" id="js-navbar-toggle">
        <i className="fas fa-bars"></i>
    </span>
    <Link to='/' className="logo">+</Link>
    <ul className="main-nav" id="js-menu">
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
    </ul>
    </nav>
    )
}

export default NavBar