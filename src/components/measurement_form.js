import React from 'react';
import "../radio.css"

const Measurement = ({ measurement, handleChange }) => {
    const spacing = {
        paddingTop: 10
    }

    const metricSpacing = {
        paddingLeft: 10
    }

    return (
        <div style={spacing}>
            <label>
                <input name="measurement"
                       className="form-radio" 
                       value="imperial" 
                       checked={measurement === "imperial"} 
                       onChange={handleChange} 
                       type="radio" /> Imperial (US) 
            </label>
            <label style={metricSpacing}>
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