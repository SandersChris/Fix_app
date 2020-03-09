import React from 'react';

import './Gender.styles.css'

const Gender = ({ gender, handleChange }) => {

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
            <label className="femaleSpacing">
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