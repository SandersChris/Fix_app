import React from "react";
import HelpTip from './help_tip'
import ZoneInfo from './zone_info'

const Zone = ({ bmr }) => {
    // upper zone of yellow 
    const yellowHigh = Math.round(bmr + (bmr * 0.15))
    // lower zone of yellow
    const yellowLow = Math.round(bmr - (bmr * 0.15))
    // green zone
    const green = Math.round(bmr - (bmr * 0.30))

    const parentDivStyle = {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 96,
        height: 800,
        left: "55%",
        width: "100%",
    }

    const yellowStyle = {
        backgroundColor: '#f9ce00',
        width: 500,
        height: "100%",
        opacity: 0.93,
        filter: "drop-shadow(0px 0px 20px #9e9e9e)",
        borderRadius: 5
    }

    const redStyle = {
        backgroundColor: '#c72c41',
        width: 500,
        height: "100%",
        opacity: 0.93,
        filter: "drop-shadow(0px 0px 20px #9e9e9e)",
        borderRadius: 5
    }

    const doubleRedStyle = {
        backgroundColor: '#801336',
        width: 500,
        height: "100%",
        opacity: 0.93,
        filter: "drop-shadow(0px 0px 20px #9e9e9e)",
        borderRadius: 5
    }

    const greenStyle = {
        backgroundColor: '#009975',
        width: 500,
        height: "100%",
        opacity: 0.93,
        filter: "drop-shadow(0px 0px 20px #9e9e9e)",
        borderRadius: 5
    }

    // zone numbers
    const YellowHighStyle = {
        paddingTop: 71,
        paddingLeft: 20,
        height: 39,
    }

    const GreenHighStyle = {
        paddingTop: 166,
        paddingLeft: 20,
        height: 39,
    }

    const RedHighStyle = {
        paddingTop: 162,
        paddingLeft: 20,
        height: 39
    }

    const allZoneStyle = {
        paddingLeft: 5
    }

    // help positioning
    const yellowHelp = {
        top: 160,
        right: -70
    }

    const greenHelp = {
        top: 184,
        right: -70
    }

    const doubleRedHelp = {
        top: 182,
        right: -70
    }

    const infoStyle = {
        textAlign: 'center',
        color: '#faf9f9',
        display: "grid",
        gridTemplateRows: "1fr 1fr 1fr 1fr",
        rowGap: 20
    }
    
    return(
        <div style={parentDivStyle}>
            <div style={infoStyle}>
                <div style={redStyle}><ZoneInfo zone={'Red Zone'} head={'Above 15% TEE'} para={'Gain Lean Muscle/Gain Fat'}/></div>
                <div style={yellowStyle}><ZoneInfo zone={'Yellow Zone'} head={'Between Above and Below 15% TEE'} para={'Maintain Weight'}/></div>
                <div style={greenStyle}><ZoneInfo zone={'Green Zone'} head={'Between 15% and 30% below TEE'} para={'Gain Lean Muscle/Lose Fat'}/></div>
                <div style={doubleRedStyle}><ZoneInfo zone={'Double Red Zone'} head={'Below 30% TEE'} para={'Lose Lean Muscle/Gain Fat'}/></div>
            </div>
            <div style={allZoneStyle}>
                <HelpTip style={yellowHelp} tip={'This caloric intake level represents the yellow zone top threshold.'}/>
                <div style={YellowHighStyle}></div>
                <div style={YellowHighStyle}>{yellowHigh}</div>
                <HelpTip style={greenHelp} tip={'This caloric intake level represents the yellow zone bottom threshold. Ideal for losing weight.'} />
                <div style={GreenHighStyle}>{yellowLow}</div> 
                <HelpTip style={doubleRedHelp} tip={'This caloric intake level represents the green zone bottom threshold. It is highly advised to stay above this level.'} />
                <div style={RedHighStyle}>{green}</div>
            </div>
        </div>
    )
}

export default Zone