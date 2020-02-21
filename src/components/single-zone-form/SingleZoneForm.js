import React from 'react'
import BmrForm from '../bmrForm/BmrForm'
import Measurement from '../measurement/Measurement'
import Gender from '../gender/Gender'

import '../zoneForm/zone-form-refactored.styles.css'

const SingleZoneForm = ({ 
    handleGender, 
    gender,
    measurement,
    handleMeasurement,
    calculate,
    renderMeasurement,
    TEE,
    handleTEE,
    className,
    bmrClassName,
    handleClick
     }) => {
    return (
            <div className={className} >
              <h2 className="zone-header">Calorie Zones</h2>
              <Gender handleChange={handleGender} gender={gender} />
              <Measurement measurement={measurement} handleChange={handleMeasurement} />
              <BmrForm 
                className={bmrClassName}
                calculate={calculate}
                renderMeasurement={renderMeasurement}
                value={TEE}
                handleTEE={handleTEE}
                handleClick={handleClick}
                />
            </div>
    )
}

export default SingleZoneForm


/*<div className="top-div" >
            <div className="unrendered-form" >
              <h2 className="zone-header">Calorie Zones</h2>
              <Gender handleChange={handleGender} gender={gender} />
              <Measurement measurement={measurement} handleChange={handleMeasurement} />
              <BmrForm 
                className="bmr-form"
                calculate={measurement === "imperial" ? handleImperialBmr : handleMetricBmr}
                renderMeasurement={renderMeasurement}
                value={TEE}
                handleTEE={handleTEE}
                />
            </div>
        </div> */


        /*}<div className="rendered-form animated slideInRight">
                  <h2 className="zone-header">Calorie Zones</h2>
                  <Gender handleChange={handleGender} gender={gender} />
                  <Measurement measurement={measurement} handleChange={handleMeasurement} />
                  <BmrForm 
                    className="bmr-rendered"
                    calculate={measurement === "imperial" ? handleImperialBmr : handleMetricBmr}
                    renderMeasurement={renderMeasurement}
                    value={TEE}
                    handleTEE={handleTEE}
                  /> 
  </div>{*/