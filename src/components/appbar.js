import React from "react";
import "../css/appbar.css"

const NavBar = () => {
    return (
    <nav className="navbar">
    <span className="navbar-toggle" id="js-navbar-toggle">
        <i className="fas fa-bars"></i>
    </span>
    <p className="logo">+</p>
    <ul className="main-nav" id="js-menu">
        <li>
            <a href="https://thefixgym.com/" className="nav-links">The Fix Gym</a>
        </li>
        <li>
            <p className="nav-links">My Profile</p>
        </li>
        <li>
            <p className="nav-links">Food Blocks</p>
        </li>
        <li>
            <p className="nav-links">Calorie Zones</p>
        </li>
        <li>
            <a href="https://thefixgym.com/the-fix-life-blog/" className="nav-links">The Fix Blog</a>
        </li>
    </ul>
    </nav>
    )
}

export default NavBar