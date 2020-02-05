import React from 'react';
import TextField from '@material-ui/core/TextField'

import './Imperial.styles.css'

const Imperial = (props) => {

    const inputProps = {
        size: 8,
        maxLength: 3
    }

    const inputPropsInches = {
        size: 4,
        maxLength: 2
    }

    return (
        <div>
            <div className="spacingWeight"> <TextField id="outlined-helperText" label="Weight" helperText="lbs" value={props.pounds} onChange={props.handlePounds} inputProps={inputProps} margin="normal" variant="outlined"/></div>
            <div className="spacingHeight"> <TextField id="outlined-helperText" label="Height" helperText="feet" value={props.feet} onChange={props.handleFeet} inputProps={inputProps} margin="normal" variant="outlined"/>
                          <span className="spacingInches"><TextField id="outlined-helperText" helperText="inches" value={props.inches} onChange={props.handleInches} inputProps={inputPropsInches} margin="normal" variant="outlined"/></span></div>
            <div><TextField id="outlined-helperText" label="Age" helperText="years" value={props.age} onChange={props.handleAge} inputProps={inputProps} margin="normal" variant="outlined"/></div>
        </div>
    )
}

export default Imperial