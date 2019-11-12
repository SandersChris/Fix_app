import React from 'react';
import '../css/help_tip.css'

const HelpTip = ({tip, style}) => {
    return (
        <div style={style} className="help-tip">
            <p>{tip}</p>
        </div>
    )
}

export default HelpTip 