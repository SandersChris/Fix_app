import React from 'react';
import TextField from '@material-ui/core/TextField'

import './Metric.styles.css'
// fix tip location when a option is selected

const Metric = (props) => {

    const isNumberKey = event => {
        const charCode = (event.which)
        if ((charCode > 31 && (charCode < 48 || charCode > 57 ))) {
            event.preventDefault()
        }

        return true
    }

    const inputProps = {
        size: 8,
        maxLength: 3
    }

    return (
        <div id="top-spacing">
            <div id="spacingWeight"> 
                <TextField 
                    id="outlined-helperText" 
                    label="Weight" helperText="kg" 
                    value={props.weight} 
                    onChange={props.handleWeight} 
                    inputProps={inputProps} 
                    margin="normal" 
                    variant="outlined"
                    onKeyDown={isNumberKey}
                />
            </div>
            <div id="spacingHeight"> 
                <TextField
                    className='height-width'
                    id="outlined-helperText" 
                    label="Height" 
                    helperText="cm" 
                    value={props.height} 
                    onChange={props.handleHeight} 
                    inputProps={inputProps} 
                    margin="normal" 
                    variant="outlined"
                    onKeyDown={isNumberKey}
                />
            </div>
            <div id="spacingAge">
                <TextField 
                    id="outlined-helperText" 
                    label="Age" 
                    helperText="years" 
                    value={props.age} 
                    onChange={props.handleAge} 
                    inputProps={inputProps} 
                    margin="normal" 
                    variant="outlined"
                    onKeyDown={isNumberKey}
                />
            </div>
        </div>
    )
}

export default Metric