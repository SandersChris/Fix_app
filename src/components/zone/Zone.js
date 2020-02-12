import React from "react";
import ZoneInfo from '../zoneInfo/ZoneInfo'

import './Zone.styles.css'

const Zone = ({ bmr }) => {
    // upper zone of yellow 
    const yellowHigh = Math.round(bmr)
    // lower zone of yellow
    const yellowLow = Math.round(bmr - (bmr * 0.15))
    // green zone
    const green = Math.round(bmr - (bmr * 0.30))
    
    return(
        <div className="parentDiv">
            <div className="info">
                <div className="red animated fadeInLeft delay-1s"><ZoneInfo /></div>
                <div className="yellow animated fadeInRight delay-1s"><ZoneInfo /></div>
                <div className="green animated fadeInLeft delay-1s"><ZoneInfo /></div>
                <div className="doubleRed animated fadeInRight delay-1s"><ZoneInfo /></div>
            </div>
        </div>
    )
}

export default Zone