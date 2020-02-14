import React, { useState } from 'react';
import roundTo from 'round-to'

import BmrForm from '../bmrForm/BmrForm'
import BmrTotal from '../bmr/Bmr'
import Zone from '../zone/Zone'
import Imperial from '../imperial/Imperial'
import Metric from '../metric/Metric'
import Measurement from '../measurement/Measurement'
import Gender from '../gender/Gender'
import Modal from '../../Modal'

import './zone-form-refactored.styles.css'
// state may be updating everytime a letter is typed, updating too often see if this should be changed
// update div header to be across entire screen

const ZoneFormRefactored = () => {
    // total bmr
    const [bmr, setBmr] = useState(0)
    // measurement type
    const [ measurement, setMeasurement ] = useState("imperial")
    // metric
    const [kilograms, setKilograms] = useState('')
    const [centimeters, setCentimeters] = useState('')
    // imperial
    const [feet, setFeet] = useState('')
    const [inches, setInches] = useState('')
    const [pounds, setPounds] = useState('')
    // years
    const [age, setAge] = useState('')
    // total energy expenditure
    const [TEE, setTEE] = useState(0)
    // bmi
    const [bmi, setBmi] = useState(0)

    const [ gender, setGender ] = useState('male')

    // handles input changes 
    const handleKilograms = event => setKilograms(Number(event.target.value))
    const handleCentimeters = event => setCentimeters(Number(event.target.value))
    const handleAge = event => setAge(Number(event.target.value))
    const handleTEE = event => setTEE(Number(event.target.value))
    const handleFeet = event => setFeet(Number(event.target.value))
    const handleInches = event => setInches(Number(event.target.value))
    const handlePounds = event => setPounds(Number(event.target.value))
    const handleMeasurement = event => setMeasurement(event.target.value)
    const handleGender = event => setGender(event.target.value)

    // ternary rendering of measurement form (refactor)
    const renderMeasurement = measurement === "imperial" 
    ? <Imperial 
        pounds={pounds} 
        handlePounds={handlePounds} 
        feet={feet} 
        handleFeet={handleFeet} 
        inches={inches} 
        handleInches={handleInches} 
        age={age} 
        handleAge={handleAge} 
        />
    :   <Metric 
          weight={kilograms}
          handleWeight={handleKilograms}
          height={centimeters}
          handleHeight={handleCentimeters}
          age={age}
          handleAge={handleAge} 
        /> 

    const handleMetricBmr = (event) => {
        event.preventDefault()

        setBmi(roundTo(1.3 * (kilograms / ((centimeters / 100) ** 2.5)), 2))

        if (gender === "male") 
          setBmr(Math.round(((10 * kilograms) + (6.25 * centimeters) - (5 * age) + 5) * TEE))
        else
          setBmr(Math.round(((10 * kilograms) + (6.25 * centimeters) - (5 * age) - 161) * TEE))
      }

    const handleImperialBmr = (event) => {
        event.preventDefault()
        if (inches === '') setInches(0)

        const metricHeightExponentConvert = ((((((feet * 12) + inches) * 2.54) / 100)) ** 2.5)
        // conversions for equation
        const metricHeightConvert = ((feet * 12) + inches) * 2.54
        const metricWeightConvert = (pounds * 0.4535)

        setBmi(roundTo(1.3 * (metricWeightConvert / metricHeightExponentConvert), 2))
        // Harris Benedict Formula with TEE 
        if (gender === 'male')
          setBmr(Math.round(((10 * metricWeightConvert) + (6.25 * metricHeightConvert) - (5 * age) + 5) * TEE))
        else 
          setBmr(Math.round(((10 * metricWeightConvert) + (6.25 * metricHeightConvert) - (5 * age) - 161) * TEE))  
    }

    console.log(bmi)

    // ternery for bmr and zone rendering 
    const renderBmrZone = bmr === 0 || isNaN(bmr / TEE)
      ? // unrendered template first
        <div className='form-position'>
            <div className="top-div" >
            <div className="unrendered-form" >
              <h1 className="zone-header">Calorie Zones</h1>
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
            </div>
        </div>

      : // rendered template
        <div className='rendered-top-div'>
              <div className="form-bmr">
                <div className="rendered-form animated slideInRight">
                  <h1 className="zone-header">Calorie Zones</h1>
                  <Gender handleChange={handleGender} gender={gender} />
                  <Measurement measurement={measurement} handleChange={handleMeasurement} />
                  <BmrForm 
                    className="bmr-rendered"
                    calculate={measurement === "imperial" ? handleImperialBmr : handleMetricBmr}
                    renderMeasurement={renderMeasurement}
                    value={TEE}
                    handleTEE={handleTEE}
                  /> 
                  </div>
              </div>
              <div className='zone-results'>
                  <div className="zones">
                      <Zone bmr={bmr} />
                  </div>
              </div>
              <div className='bmr-results-container'>
                <div className="bmr-results animated fadeInUp delay-1s">
                  <BmrTotal bmr={Math.round(bmr / TEE)} tee={bmr} bmi={bmi}/>
                </div>
              </div>
                
        </div>

    return (
        renderBmrZone
    )
}

export default ZoneFormRefactored