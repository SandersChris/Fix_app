import React from 'react'
import './Header.styles.css'

const Header = ({ title }) => {
    
    return (
            <div className="containerStyle">
                <h1 className="h1Style">{title}</h1>
                <h1 className="xStyle">+</h1>
            </div>
    )
}

export default Header