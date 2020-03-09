import React from 'react';

import './Bmr.styles.css'

import { ReactComponent as Run } from '../../assets/directions_run-24px.svg'
import { ReactComponent as Sit } from '../../assets/airline_seat_recline_normal-24px.svg'
import { ReactComponent as Stand } from '../../assets/accessibility-24px.svg'

const BmrTotal = ({ bmr, tee, bmi }) => {
    // being overwritten because it is inline

    // Basal Metabolic Rate (BMR) is how much energy your body requires for basic bodily functions at rest. This includes breathing, blood circulation, and regulating body temperature, as well as many other processes.

    // Remember selecting your activity level? Well that\'s what we use to calculate total energy expenditure (TEE). TEE is the amount of calories burned by the human body in one day adjusted by your current activity level (BMR x activity level). The number you see here tells you how many calories you can eat at your given level while maintaining your current weight.

    return(
        <div className='bmr-top-div'>
            <div>
                <div className="tooltip">
                    <span className='sit'><Sit /></span>
                    <span className="tooltiptext">The amount of calories you burn at rest to maintain basic bodily functions.</span>
                    <span className='bmr'>Basal Metabolic Rate: {bmr} Cal</span>
                    <span className='bmr-small'>BMR: {bmr} Cal</span>
                    <span className='border-left'></span>
                </div>
                <div className='tooltip'>
                    <span className='run'><Run /></span>
                    <span className="tooltiptext">
                    The total amount of calories you burn 
                    on the days you exercise at your current activity level. 
                    On the days you do not exercise, your TEE (total energy expenditure) 
                    will be closer to somewhere between your TEE and BMR (basal metabolic rate).
                    </span>
                    <span className='tee'>Total Energy Expenditure: <span className='small-tee'>{tee} Cal</span></span>
                    <span className='little-tee'>TEE: <span className='little-tee-cal'>{tee} Cal</span></span>
                    <span className='border-right'></span>
                </div>
                <div className='tooltip'>
                    <span className='stand'><Stand /></span>
                    <span className="tooltiptext bmi-tooltext">
                            Underweight: Your BMI is less than 18.5
                            Healthy weight: Your BMI is 18.5 to 24.9
                            Overweight: Your BMI is 25 to 29.9
                            <div className='obese'>
                            Obese: Your BMI is 30 or higher
                            </div>
                        BMI (body mass index) measurements do not account for muscle mass. Therefore, this measurement will be more accurate for sedentary individuals compared to active
                        ones. For example, many Olympic athletes fall into the overweight category.
                    </span>
                    <span className='bmi'>Body Mass Index: {bmi}</span>
                    <span className='bmi-small'>BMI: {bmi}</span>
                </div>
            </div>
            {/*}
            <div className="tee-container">
                <span className='run'><Run /></span>
                <span className='tee'>Total Energy Expenditure: {tee} Cal</span>
            </div>
            {*/}
        </div>
    )
}

export default BmrTotal