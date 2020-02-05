import React from 'react';
import TextField from '@material-ui/core/TextField'
// fix tip location when a option is selected

const Metric = (props) => {

    const inputProps = {
        size: 8,
        maxLength: 3
    }

    return (
        <div className="spacing">
            <div> <TextField id="outlined-helperText" label="Weight" helperText="kg" value={props.weight} onChange={props.handleWeight} inputProps={inputProps} margin="normal" variant="outlined"/></div>
            <div className="spacingHeight"> <TextField id="outlined-helperText" label="Height" helperText="cm" value={props.height} onChange={props.handleHeight} inputProps={inputProps} margin="normal" variant="outlined"/></div>
            <div className="spacingAge"><TextField id="outlined-helperText" label="Age" helperText="years" value={props.age} onChange={props.handleAge} inputProps={inputProps} margin="normal" variant="outlined"/></div>
        </div>
    )
}

export default Metric