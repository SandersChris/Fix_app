import React from 'react';

import './Measurement.styles.css'

const Measurement = ({ measurement, handleChange }) => {

    return (
        <div className="spacing">
            <label>
                <input name="measurement"
                       className="form-radio" 
                       value="imperial" 
                       checked={measurement === "imperial"} 
                       onChange={handleChange} 
                       type="radio" /> Imperial (US) 
            </label>
            <label className="metricSpacing" >
                <input name="measurement"
                       className="form-radio" 
                       value="metric" 
                       checked={measurement === "metric"} 
                       onChange={handleChange} 
                       type="radio" /> Metric
            </label>
        </div>
    )
}

export default Measurement