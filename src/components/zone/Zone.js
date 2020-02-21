import React from "react";

import TopZoneInfo from '../top-zone-info/TopZoneInfo'

import './Zone.styles.css'

const Zone = ({ bmr }) => {
    // upper zone of yellow 
    const yellowHigh = Math.round(bmr)
    // lower zone of yellow
    const yellowLow = Math.round(bmr - (bmr * 0.15))
    // green zone
    const green = Math.round(bmr - (bmr * 0.30))
    
    return(
        <div className='parentDiv'>
            <div className='info'>
                    <div className='red animated fadeInLeft delay-1s'>
                        <TopZoneInfo />
                    </div>
                <div>
                    <div className='yellowHigh animated fadeInDown delay-1s'>{yellowHigh} Calories</div>
                    <div className='yellow animated fadeInRight delay-1s'>
                        <TopZoneInfo />
                    </div>
                </div>
                <div>
                    <div className='green animated fadeInLeft delay-1s'><TopZoneInfo /></div>
                    <p className='yellowLow animated fadeInDown delay-1s'>{yellowLow} Calories</p>
                </div>
                <div>
                    <div className='doubleRed animated fadeInRight delay-1s'><TopZoneInfo /></div>
                    <div className='green-low animated fadeInDown delay-1s'>{green} Calories</div>
                </div>
            </div>
        </div>
    )
}

export default Zone