import React from 'react'

const ZoneInfoIndividual = ({ 
    headerClassName, 
    sectionClassName, 
    header,
    text,
    zoneClassName,
    textContainer,
    textClassName }) => {
    return (
        <section style={{ display: 'flex', justifyContent: 'center' }} 
                 className={sectionClassName} >
            <div className={zoneClassName}></div>
            <div className={textContainer}>
                <p className={headerClassName}>{header}</p>
                <p className={textClassName}>{text}</p>
            </div>
        </section>
    )
}

export default ZoneInfoIndividual