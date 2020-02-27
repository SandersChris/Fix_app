import React, { useState } from 'react';
import roundTo from 'round-to'
import axios from 'axios'

import BmrTotal from '../bmr/Bmr'
import Zone from '../zone/Zone'
import Imperial from '../imperial/Imperial'
import Metric from '../metric/Metric'
import SingleZoneForm from '../single-zone-form/SingleZoneForm'
import Modal from '../../Modal'
import RecalculateModal from '../recalculate-modal/RecalculateModal'

import { ReactComponent as DownArrow } from '../../assets/keyboard_arrow_down-24px.svg'

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
    const [ email, setEmail ] = useState('')

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

    const emailValidated = email.length > 6 && email.includes('@') && email.includes('.')

    const handleChange = event => {
      const email = event.target.value
      setEmail(email)
    }

    const handleSubmit = (e) => {
      if (emailValidated) {
          console.log(email)
          axios(`caloriezones/email?email=${email}&bmr=${Math.round(bmr / TEE)}&tee=${bmr}&bmi=${bmi}`)
      } else {
          e.preventDefault()
      }
    }

    // ternary rendering of measurement form (refactor)
    const renderMeasurement = measurement === 'imperial' 
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

    // ternery for bmr and zone rendering 
    const renderBmrZone = bmr < 650 || isNaN(bmr / TEE)
      ? // unrendered template first
        <div className='form-position'>
          <div className='top-div'>
              <SingleZoneForm 
                className='unrendered-form'
                bmrClassName='bmr-form'
                handleGender={handleGender} 
                gender={gender}
                measurement={measurement}
                handleMeasurement={handleMeasurement}
                calculate={measurement === 'imperial' ? handleImperialBmr : handleMetricBmr} //refactor
                renderMeasurement={renderMeasurement}
                TEE={TEE}
                handleTEE={handleTEE}
              />
          </div>
        </div>

      : // rendered template
        <div className='rendered-top-div'>
              <div className="form-bmr">
                <SingleZoneForm 
                  className='rendered-form animated slideInRight'
                  bmrClassName='bmr-rendered'
                  handleGender={handleGender}
                  gender={gender}
                  measurement={measurement}
                  handleMeasurement={handleMeasurement}
                  calculate={measurement === 'imperial' ? handleImperialBmr : handleMetricBmr}
                  renderMeasurement={renderMeasurement}
                  TEE={TEE}
                  handleTEE={handleTEE}
                />
              </div>
              <div className='zone-results'>
                  <div className="zones">
                      <Zone bmr={bmr} />
                  </div>
              </div>
              <div className='bmr-results-container'>
                <div className="bmr-results animated fadeInUp delay-1s">
                  <BmrTotal bmr={Math.round(bmr / TEE)} tee={bmr} bmi={bmi}/>
                  <RecalculateModal 
                    className='form-example'
                    handleGender={handleGender}
                    gender={gender}
                    measurement={measurement}
                    handleMeasurement={handleMeasurement}
                    calculate={measurement === 'imperial' ? handleImperialBmr : handleMetricBmr}
                    renderMeasurement={renderMeasurement}
                    TEE={TEE}
                    handleTEE={handleTEE}
                  />
                </div>
              </div>
              <div className='down-arrow-rendered'>
                <DownArrow />
              </div>
              <Modal email={email}  handleSubmit={handleSubmit} handleChange={handleChange}/>
        </div>

    return (
        renderBmrZone
    )
}

export default ZoneFormRefactored