import React from 'react';

import './HelpTip.styles.css'

const HelpTip = ({tip, style}) => {
    return (
        <div style={style} className="help-tip questionPosition">
            <p>{tip}</p>
        </div>
    )
}

export default HelpTip 