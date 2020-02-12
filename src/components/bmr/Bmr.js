import React from 'react';

import './Bmr.styles.css'

import { ReactComponent as Run } from '../../assets/directions_run-24px.svg'
import { ReactComponent as Sit } from '../../assets/airline_seat_recline_normal-24px.svg'

const BmrTotal = ({ bmr, tee}) => {
    // being overwritten because it is inline

    // Basal Metabolic Rate (BMR) is how much energy your body requires for basic bodily functions at rest. This includes breathing, blood circulation, and regulating body temperature, as well as many other processes.

    // Remember selecting your activity level? Well that\'s what we use to calculate total energy expenditure (TEE). TEE is the amount of calories burned by the human body in one day adjusted by your current activity level (BMR x activity level). The number you see here tells you how many calories you can eat at your given level while maintaining your current weight.

    return(
        <div className='bmr-top-div'>
            <div>
                <span className='sit'><Sit /></span>
                <span className='bmr'>Basal Metabolic Rate: {bmr}</span>
            </div>
            <div className="tee-container">
                <span className='run'><Run /></span>
                <span className='tee'>Total Energy Expenditure: {tee}</span>
            </div>
        </div>
    )
}

export default BmrTotal