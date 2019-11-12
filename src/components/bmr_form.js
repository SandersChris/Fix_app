import React from 'react';
import HelpTip from './help_tip'
import '../help_tip.css'
import '../select.css'
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
// think about how to refactor help_tip.css into this component

const StyledSelect = withStyles({
  root: {
    maxWidth: 225
  }
})(Select);

const StyledButton = withStyles({
  root: {
    background: '#c93838',
    color: 'white',
  }
})(Button);

const BmrForm = (props) => {
    const buttonStyle = {
        paddingTop: 15,
        zIndex: -1
    }

    const questionPosition = {
        top: 33,
        right: 30
    }

    const selectStyle = {
        width: 300,
        textAlign: "center",
        bottom: 50     
    }

    const useStyles = makeStyles(theme => ({
        root: {
          display: 'flex',
          flexWrap: 'wrap',
          maxWidth: 200
        },
        formControl: {
          margin: theme.spacing(1),
        },
        selectEmpty: {
          marginTop: theme.spacing(2),
        },
      }));

    const classes = useStyles();

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
      setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    const inputProps = {
      name: "Total Energy Expenditure"
    }

    const divStyle = {
      maxWidth: "100%",
      minWidth: "50%"
    }

    return(
            <div style={divStyle}>
            <form onSubmit={props.calculate}>
                <div>{props.renderMeasurement}</div>
                <div style={selectStyle}>
                <HelpTip style={questionPosition} tip={'This select menu translates your physical activity level (PAL) into a number. If you plan on The Fix being your only source of exercise, we reccommend selecting "Moderately Active".'} />
                <FormControl variant='outlined' className={classes.root}>
                <InputLabel ref={inputLabel} >Select Activity Level</InputLabel>
                <StyledSelect value={props.value} inputProps={inputProps} labelWidth={labelWidth} autoWidth={true} onChange={props.handleTEE}>
                    <MenuItem value='' disabled><em>--Select activity level--</em></MenuItem>
                    <MenuItem value='1.2'>Sedentary (little or no exercise)</MenuItem>
                    <MenuItem value='1.375'>Lightly active (light exercise/sports 1-3 days/week)</MenuItem>
                    <MenuItem value='1.55'>Moderately active (moderate exercise/sports 3-5 days/week)</MenuItem>
                    <MenuItem value='1.725'>Very active (hard exercise/sports 6-7 days/week)</MenuItem>
                    <MenuItem value='1.9'>Extremely active (very hard exercise/sports & physical job)</MenuItem>
                </StyledSelect>
                </FormControl>
                </div>
                <div style={buttonStyle}>
                <StyledButton type="submit" variant="contained" color="default">
                Calculate!
              </StyledButton>
                </div>
            </form>
            </div>
    )
}

export default BmrForm