import React, { useState } from 'react';
import BmrForm from './bmr_form'
import BmrTotal from './bmr'
import Zone from './zone'
import Imperial from './imperial'
import Metric from './metric'
import Measurement from './measurement_form'
import Explainer from './explainer'
import Gender from './gender'
// state may be updating everytime a letter is typed, updating too often see if this should be changed

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
    ? <Imperial pounds={pounds} 
                handlePounds={handlePounds} 
                feet={feet} 
                handleFeet={handleFeet} 
                inches={inches} 
                handleInches={handleInches} 
                age={age} 
                handleAge={handleAge} />
    :   <Metric weight={kilograms}
                handleWeight={handleKilograms}
                height={centimeters}
                handleHeight={handleCentimeters}
                age={age}
                handleAge={handleAge} /> 

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
        if (gender === "male")
          setBmr(Math.round(((10 * metricWeightConvert) + (6.25 * metricHeightConvert) - (5 * age) + 5) * TEE))
        else 
          setBmr(Math.round(((10 * metricWeightConvert) + (6.25 * metricHeightConvert) - (5 * age) - 161) * TEE))  
    }

    const formStyle = {
      paddingTop: 30,
      paddingLeft: 144,
      width: 480,
      height: 520,
      float: "right",
      backgroundColor: "rgba(246, 246, 246, 1)",
      borderRadius: 25,
      filter: "drop-shadow(0px 0px 10px #d4d7dd)"
    }

    //1350 width for scale down

    const formStyleRendered = {
      position: "relative",
      top: 196,
      left: 50,
      paddingTop: 15,
      paddingLeft: 150,
      width: 480,
      height: 520,
      backgroundColor: "rgba(246, 246, 246, 1)",
      borderRadius: 25,
      filter: "drop-shadow(0px 0px 20px #d4d7dd)"
    }

    const explainerStyle = {
      float: "left",
      height: "100%",
      width: "50%",
    }

    const divStyle = {
      width: "96%",
      maxWidth: 1250,
      paddingTop: 145,
    }

    const zoneStyle = {
      paddingTop: 100,
      paddingLeft: 40
    }

    const parentDiv = {
      position: "absolute",
  }

    const parentDivRendered = {
      paddingLeft: 1000
    }  

    const renderedDivStyle = {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr",
      rowGap: 50,
      columnGap: 50,
      height: "53%",
      width: 1250,
    }

    const bmrStyle = {
      position: "relative",
      left: 50,
      paddingLeft: 30,
      paddingTop: 30,
      top: 220,
      width: 480,
      height: 120,
      borderRadius: 25,
      backgroundColor: "rgba(246, 246, 246, 1)",
      opacity: 0.95,
      filter: "drop-shadow(0px 0px 10px #d4d7dd)",
    }

    // ternery for bmr and zone rendering 
    const renderBmrZone = bmr === 0 || isNaN(bmr / TEE)
    ? <div style={divStyle}>
        <Explainer style={explainerStyle} />
        <div style={formStyle}>
          <Gender handleChange={handleGender} gender={gender} />
          <Measurement measurement={measurement} handleChange={handleMeasurement} />
          <BmrForm style={parentDiv} calculate={measurement === "imperial" ? handleImperialBmr : handleMetricBmr}
                  renderMeasurement={renderMeasurement}
                  value={TEE}
                  handleTEE={handleTEE}/>
        </div>
      </div>
    : <div style={renderedDivStyle}>
      <div>
        <div style={formStyleRendered}>
          <Gender handleChange={handleGender} gender={gender} />
          <Measurement measurement={measurement} handleChange={handleMeasurement} />        
          <BmrForm style={parentDivRendered} calculate={measurement === "imperial" ? handleImperialBmr : handleMetricBmr}
          renderMeasurement={renderMeasurement}
          value={TEE}
          handleTEE={handleTEE}/>
        </div>
        <div style={bmrStyle}>
          <BmrTotal bmr={Math.round(bmr / TEE)} tee={bmr}/>
        </div>
        </div>
        <div style={zoneStyle}>
          <Zone bmr={bmr} />
        </div> 
      </div> 

    return (
        renderBmrZone  
    )
}

export default ZoneForm
