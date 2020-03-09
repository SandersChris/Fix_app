import React, { useRef } from 'react'
import { useIntersection } from 'react-use'
import gsap from 'gsap'

import ZoneInfoIndividual from '../zone-info-individual/ZoneInfoIndividual'

import './zone-info.styles.css'
// look for refactors
// transition in quicker with the calorie zones

gsap.config({
    nullTargetWarn: true
})

const ZoneInfo = () => {
    const sectionRef = useRef(null)
    const sectionRefRed = useRef(null)
    const sectionRefGreen = useRef(null)
    const sectionRefYellow = useRef(null)
    const sectionRefDoubleRed = useRef(null)

    // must be unique
    const intersection = useIntersection(sectionRef, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    })

    const intersectionRed = useIntersection(sectionRefRed, {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    })

    const intersectionYellow = useIntersection(sectionRefYellow, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    })

    const intersectionGreen = useIntersection(sectionRefGreen, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    })

    const intersectionDoubleRed = useIntersection(sectionRefDoubleRed, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    })

    const fadeIn = element => {
        gsap.to(element, 1, {
            opacity: 1,
            y: -60,
            ease: 'power4.out',
            stagger: {
                amount: 0.2
            }
        })
    }

    const fadeOut = element => {
        gsap.to(element, 1, {
            opacity: 0,
            y: -20,
            ease: 'power4.out'
        })
    }

    intersection && intersection.intersectionRatio < 0.1
        ? fadeOut('.fadeIn')
        : fadeIn('.fadeIn')

    intersectionRed && intersectionRed.intersectionRatio < 0.3
        ? fadeOut('.fadeInRed')
        : fadeIn('.fadeInRed')

    intersectionYellow && intersectionYellow.intersectionRatio < 0.5
        ? fadeOut('.fadeInYellow')
        : fadeIn('.fadeInYellow')

    intersectionGreen && intersectionGreen.intersectionRatio < 0.5
        ? fadeOut('.fadeInGreen')
        : fadeIn('.fadeInGreen')

    intersectionDoubleRed && intersectionDoubleRed.intersectionRatio < 0.5
        ? fadeOut('.fadeInDoubleRed')
        : fadeIn('.fadeInDoubleRed')

    return (
        <div ref={sectionRef} className='main-container'>
            <div className='zone-info-container fadeIn'>
                <div className='zone-header-container'>
                    <h4 className='zone-info-title'>ZONE PHILOSOPHY</h4>
                    <p className='zone-info-tag'>
                        An easy way to conceptualize weight loss.
                    </p>
                    <p className='zone-info-explainer'>
                        Calorie Zones utilize the 1990 revised 
                        Harris-Benedict equation for basal metabolic
                        rate to create an intuitive look into calorie 
                        intake and its effect on weight. The calculator 
                        above will show you your various caloric
                        thresholds for gaining, 
                        maintaining, and losing weight on a typical 
                        day.
                    </p>
                </div>
            </div>
            <div className='main-zone-container'>
                <ZoneInfoIndividual 
                    ref={sectionRefRed}
                    sectionClassName='red-and-green-zone-container fadeInRed' 
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
                    ref={sectionRefYellow}
                    sectionClassName='yellow-and-double-red-zone-container fadeInYellow'
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
                    ref={sectionRefGreen}
                    sectionClassName='red-and-green-zone-container fadeInGreen'
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
                    ref={sectionRefDoubleRed}
                    sectionClassName='yellow-and-double-red-zone-container fadeInDoubleRed'
                    textContainer='double-red-container'
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