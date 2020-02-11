import React from 'react'

const ZoneInfoIndividual = ({
    headerClassName, 
    sectionClassName, 
    header,
    text,
    zoneClassName,
    textContainer,
    textClassName }, ref) => {
    return (
        <div ref={ref}>
        <section style={{ display: 'flex', justifyContent: 'center' }} 
                 className={sectionClassName} 
                 >
            <div className={zoneClassName}></div>
            <div className={textContainer}>
                <p className={headerClassName}>{header}</p>
                <p className={textClassName}>{text}</p>
            </div>
        </section>
        </div>
    )
}

const forwardedZoneInfoIndividual = React.forwardRef(ZoneInfoIndividual)

export default forwardedZoneInfoIndividual