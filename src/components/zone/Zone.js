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
                <div className="red"><ZoneInfo zone={'Red Zone'} head={'Above TEE'} para={'Gain Lean Muscle/Gain Fat'}/></div>
                <div className="yellow"><ZoneInfo zone={'Yellow Zone'} head={'Below 15% or Anything above TEE'} para={'Maintain Weight'}/></div>
                <div className="green"><ZoneInfo zone={'Green Zone'} head={'Between 15% and 30% below TEE'} para={'Gain Lean Muscle/Lose Fat'}/></div>
                <div className="doubleRed"><ZoneInfo zone={'Double Red Zone'} head={'Below 30% TEE'} para={'Lose Lean Muscle/Gain Fat'}/></div>
            </div>
            <div className="allZones">
                <div className="yellowHigh"></div>
                <div className="yellowHigh"><p>{yellowHigh} Calories</p></div>
                <div className="greenHigh"><p>{yellowLow} Calories</p></div> 
                <div className="redHigh"><p>{green} Calories</p></div>
            </div>
        </div>
    )
}

export default Zone