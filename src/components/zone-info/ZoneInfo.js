import React from 'react'

import './zone-info.styles.css'

const ZoneInfo = () => {
    return (
        <div className='zone-info-container'>
            <div className='zone-header-container'>
                <h4 className='zone-info-title'>ZONE PHILOSOPHY</h4>
                <p className='zone-info-tag'>
                    Calorie zones allow anyone to easily conceptualize
                    weight loss.
                </p>
                <p className='zone-info-explainer'>
                    Calorie Zones utilize the 1990 revised 
                    Harris-Benedict equation for BMR to create an
                    intuitive look into calorie intake and its 
                    effect on weight. Believe it or not, this is 
                    one of the only weight loss tools you'll ever
                    need.
                </p>
            </div>
        </div>
    )
}

export default ZoneInfo 