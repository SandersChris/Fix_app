import React from 'react';
import TextField from '@material-ui/core/TextField'

const Imperial = (props) => {
    const spacingWeight = {
        height: 90,
    }

    const spacingHeight = {
        height: 90,
    }

    const spacingInches = {
        paddingLeft: 5
    }

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
            <div style={spacingWeight}> <TextField id="outlined-helperText" label="Weight" helperText="lbs" value={props.pounds} onChange={props.handlePounds} inputProps={inputProps} margin="normal" variant="outlined"/></div>
            <div style={spacingHeight}> <TextField id="outlined-helperText" label="Height" helperText="feet" value={props.feet} onChange={props.handleFeet} inputProps={inputProps} margin="normal" variant="outlined"/>
                          <span style={spacingInches}><TextField id="outlined-helperText" helperText="inches" value={props.inches} onChange={props.handleInches} inputProps={inputPropsInches} margin="normal" variant="outlined"/></span></div>
            <div><TextField id="outlined-helperText" label="Age" helperText="years" value={props.age} onChange={props.handleAge} inputProps={inputProps} margin="normal" variant="outlined"/></div>
        </div>
    )
}

export default Imperial