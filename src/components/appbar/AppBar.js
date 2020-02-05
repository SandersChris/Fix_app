import React from 'react'
import './AppBar.styles.css'

const NavBar = () => {
    return (
    <nav className="navbar">
    <span className="navbar-toggle" id="js-navbar-toggle">
        <i className="fas fa-bars"></i>
    </span>
    <a href="/" className="logo">+</a>
    <ul className="main-nav" id="js-menu">
        <li>
            <a href="https://thefixgym.com/" className="nav-links">The Fix Gym</a>
        </li>
        <li>
            <p className="nav-links">My Profile</p>
        </li>
        <li>
            <a href='/' className="nav-links">Calorie Zones</a>
        </li>
        <li>
            <a href="https://thefixgym.com/the-fix-life-blog/" className="nav-links">The Fix Blog</a>
        </li>
    </ul>
    </nav>
    )
}

export default NavBar