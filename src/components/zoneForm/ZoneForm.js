import React, { useState } from 'react';
import { Breakpoint } from 'react-socks'
import BmrForm from '../bmrForm/BmrForm'
import BmrTotal from '../bmr/Bmr'
import Zone from '../zone/Zone'
import Imperial from '../imperial/Imperial'
import Metric from '../metric/Metric'
import Measurement from '../measurement/Measurement'
import Explainer from '../explainer/Explainer'
import Gender from '../gender/Gender'

import './ZoneForm.styles.css'
// state may be updating everytime a letter is typed, updating too often see if this should be changed
// update div header to be across entire screen

const ZoneForm = () => {
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
        if (gender === "male") 
          setBmr(Math.round(((10 * kilograms) + (6.25 * centimeters) - (5 * age) + 5) * TEE))
        else
          setBmr(Math.round(((10 * kilograms) + (6.25 * centimeters) - (5 * age) - 161) * TEE))
      }

    const handleImperialBmr = (event) => {
        event.preventDefault()
        if (inches === '') setInches(0)
        // conversions for equation
        const metricHeightConvert = ((feet * 12) + inches) * 2.54
        const metricWeightConvert = (pounds * 0.4535)
        // Harris Benedict Formula with TEE 
        if (gender === 'male')
          setBmr(Math.round(((10 * metricWeightConvert) + (6.25 * metricHeightConvert) - (5 * age) + 5) * TEE))
        else 
          setBmr(Math.round(((10 * metricWeightConvert) + (6.25 * metricHeightConvert) - (5 * age) - 161) * TEE))  
    }

    // ternery for bmr and zone rendering 
    const renderBmrZone = bmr === 0 || isNaN(bmr / TEE)
    ? // unrendered template first
      <div style={{ paddingLeft: 25 }}>
        {/* large view size */}
        <Breakpoint customQuery='(min-width: 1025px)'>
          <div className="lgTopDiv" >
          <Explainer className="lgExplainer" />
          <div className="lgUnrenderedFormStyle" >
            <Gender handleChange={handleGender} gender={gender} />
            <Measurement measurement={measurement} handleChange={handleMeasurement} />
            <BmrForm 
              className="bmrForm"
              calculate={measurement === "imperial" ? handleImperialBmr : handleMetricBmr}
              renderMeasurement={renderMeasurement}
              value={TEE}
              handleTEE={handleTEE}
              />
          </div>
          </div>
        </Breakpoint>
        
        {/* medium view size */}
        <Breakpoint customQuery='(max-width: 1024px)'>
            <div className="mdTopDiv">
              <div>
                <Explainer className="mdExplainer" />
              </div>
              <div className="mdUnrenderedForm">
                <Gender handleChange={handleGender} gender={gender} />
                <Measurement measurement={measurement} handleChange={handleMeasurement} />
                <BmrForm 
                  className="bmrForm"
                  calculate={measurement === "imperial" ? handleImperialBmr : handleMetricBmr}
                  renderMeasurement={renderMeasurement}
                  value={TEE}
                  handleTEE={handleTEE}
                  /> 
              </div>
            </div>
        </Breakpoint>
      </div>

    : // rendered template
      <div>
      {/* large view size */}
        <Breakpoint customQuery='(min-width: 1323px)' >
          <div className="lgRenderedTopDiv">
            <div className="form-bmr">
              <div className="lgRenderedForm">
                <Gender handleChange={handleGender} gender={gender} />
                <Measurement measurement={measurement} handleChange={handleMeasurement} />
                <BmrForm 
                  className="bmrRendered"
                  calculate={measurement === "imperial" ? handleImperialBmr : handleMetricBmr}
                  renderMeasurement={renderMeasurement}
                  value={TEE}
                  handleTEE={handleTEE}/> 
              </div>
              <div className="bmrResults">
                <BmrTotal bmr={Math.round(bmr / TEE)} tee={bmr}/>
              </div>
            </div>
            <div className="zones">
              <Zone bmr={bmr} />
            </div>
          </div>
        </Breakpoint>

        {/* medium view size */} 
        <Breakpoint customQuery='(max-width: 1322px)'>
          <div className="mdRenderedTopDiv">
            <div>
              <div className="mdBmrTotal">
                <BmrTotal bmr={Math.round(bmr / TEE)} tee={bmr}/>
              </div>
              <div className="mdZones">
                <Zone bmr={bmr} />
              </div>
              <div className="mdRenderedForm">
              <Gender handleChange={handleGender} gender={gender} />
              <Measurement measurement={measurement} handleChange={handleMeasurement} />
              <BmrForm className="mdRenderedBmrForm"
                       calculate={measurement === "imperial" ? handleImperialBmr : handleMetricBmr}
                       renderMeasurement={renderMeasurement}
                       value={TEE}
                       handleTEE={handleTEE}/> 
              </div>
            </div>
          </div>
        </Breakpoint>
      </div> 

    return (
        renderBmrZone
    )
}

export default ZoneForm
