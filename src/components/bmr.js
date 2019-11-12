import React from 'react';

const BmrTotal = ({ bmr, tee, style}) => {
    // being overwritten because it is inline

    const bmrStyle = {}

    const teeStyle = {
        paddingTop: 8
    }

    // Basal Metabolic Rate (BMR) is how much energy your body requires for basic bodily functions at rest. This includes breathing, blood circulation, and regulating body temperature, as well as many other processes.

    // Remember selecting your activity level? Well that\'s what we use to calculate total energy expenditure (TEE). TEE is the amount of calories burned by the human body in one day adjusted by your current activity level (BMR x activity level). The number you see here tells you how many calories you can eat at your given level while maintaining your current weight.

    return(
        <div style={style}>
            <div>
                <h3>Your BMR: {bmr}</h3>
            </div>
            <div style={teeStyle}>
                <h3>Your TEE: {tee}</h3>
            </div>
        </div>
    )
}

export default BmrTotal