import React from 'react'

import ZoneInfoIndividual from '../zone-info-individual/ZoneInfoIndividual'

import './zone-info.styles.css'

const ZoneInfo = () => {
    return (
        <div className='main-container'>
            <div className='zone-info-container slideanim'>
                <div className='zone-header-container'>
                    <h4 className='zone-info-title'>ZONE PHILOSOPHY</h4>
                    <p className='zone-info-tag'>
                        An easy way to conceptualize weight loss.
                    </p>
                    <p className='zone-info-explainer'>
                        Calorie Zones utilize the 1990 revised 
                        Harris-Benedict equation for basal metabolic
                        rate to create an intuitive look into calorie 
                        intake and its effect on weight. Believe it or 
                        not, this the only weight loss calculator
                        you will ever need.
                    </p>
                </div>
            </div>
            <div className='main-zone-container'>
                <ZoneInfoIndividual 
                    sectionClassName='red-and-green-zone-container slideanim' 
                    headerClassName='red-zone-header'
                    textContainer='red-and-green-zone-text-container'
                    header='Red Zone'
                    text='Represents any caloric intake above and beyond your
                          Total Energy Expenditure. In this zone you will gain both
                          fat and lean muscle.'
                    zoneClassName='red-zone'
                    textClassName='zone-text'
                />
                <ZoneInfoIndividual 
                    sectionClassName='yellow-and-double-red-zone-container slideanim'
                    textContainer='yellow-and-double-red-zone-text-container'
                    headerClassName='yellow-zone-header' 
                    header='Yellow Zone'
                    text='Represents any caloric intake at or between below 15% of Total
                          Energy Expenditure. In this zone you will maintain fat and
                          gain lean muscle.'
                    zoneClassName='yellow-zone'
                    textClassName='zone-text'   
                />
                <ZoneInfoIndividual 
                    sectionClassName='red-and-green-zone-container slideanim'
                    textContainer='red-and-green-zone-text-container'
                    headerClassName='green-zone-header' 
                    header='Green Zone'
                    text='Represents any caloric intake between below 15% and 30% of Total
                          Energy Expenditure. In this zone you will lose fat and
                          gain lean muscle. The ideal zone for weight loss.'
                    zoneClassName='green-zone'
                    textClassName='zone-text'   
                />
                <ZoneInfoIndividual 
                    sectionClassName='yellow-and-double-red-zone-container slideanim'
                    textContainer='yellow-and-double-red-zone-text-container'
                    headerClassName='double-red-zone-header' 
                    header='Double Red Zone'
                    text='Represents any caloric intake below 30% of Total
                          Energy Expenditure. In this zone you will gain fat and
                          lose lean muscle. This zone should be avoided unless under
                          careful professional supervision.'
                    zoneClassName='double-red-zone'
                    textClassName='zone-text'   
                />
            </div>
        </div>
    )
}

export default ZoneInfo 