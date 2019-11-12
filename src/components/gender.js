import React from 'react';
import '../radio.css'

const Gender = ({ gender, handleChange }) => {
    const femaleSpacing= {
        paddingLeft: 9
    }

    return (
        <div>
            <label>
                <input name="gender"
                       className="form-radio" 
                       value='male' 
                       checked={gender === "male"} 
                       onChange={handleChange} 
                       type="radio" /> Male 
            </label>
            <label style={femaleSpacing}>
                <input name="gender"
                       className="form-radio" 
                       value='female' 
                       checked={gender === "female"} 
                       onChange={handleChange} 
                       type="radio" /> Female
            </label>
        </div>
    )
}

export default Gender