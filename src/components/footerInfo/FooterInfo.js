import React from "react";
import './FooterInfo.styles.css'

const FooterInfo = () => {
    
    return (
        <div className="topDiv">
                <h2 className="h2Style">What are Calorie Zones?</h2>
            <div className="topChildDivStyle">
                <div className="div1Style">   
                    <p className="p1Style">Calorie zones are a tool that helps conceptualize scientific studies concerning calorie intake and weight loss. It may come as a surprise to hear that this is one of the only resources you will ever need while working toward your dietary goals. However, this tool, combined with a <a className="aStyle" href="https://www.hsph.harvard.edu/nutritionsource/healthy-eating-plate/">balanced diet</a> and exercise is truly all there is to it!</p>
                </div>
                <div className="div2Style">
                    <p className="p3Style">It should be noted that your results will vary depending on your body type. For example, an invidual with a high lean body mass (muscular) percentage will require more calories than the given results, while a person with a high body fat percentage will need less. Most health experts agree that a pound of muscle burns about 10 to 15 calories at rest, while a pound of fat burns roughly 2 calories at rest. This <a className="aStyle" href="https://www.unm.edu/~lkravitz/Article%20folder/metabolismcontroversy.html">article</a> from the University of New Mexico provides a lot of great information on the topic.</p>
                </div>
                <div className="div3Style">
                    <h3 className="interpretStyle">Interpretations</h3>
                    <p className="p3Style">When you enter in your info and hit calculate, you will be shown 6 outputs. Your <a className="aStyle" href="https://en.wikipedia.org/wiki/Basal_metabolic_rate">BMR</a>, <a className="aStyle" href="https://en.wikipedia.org/wiki/Physical_activity_level">TEE</a>, and 4 zones. The interpretation here will focus primarily on the 4 zones. Any increase in lean body mass depends upon your exercise regimen.</p>
                    <ul className="ulStyle">
                        <li className="liStyle">The red zone represents anything above and beyond your TEE. In this zone you will still put on lean body mass but the surplus of calories will cause fat gain as well.</li>
                        <li className="liStyle">The yellow zone represents your homeostasis. If you stay within this zone, particularily at your given TEE, you will gain lean body mass but maintain fat.</li>
                        <li className="liStyle">The green zone represents any caloric intake between below 15% and 30% of your TEE. For most people, this is the desired zone, as it allows an individual to gain/maintain lean body mass while losing fat.</li>
                        <li className="liStyle">The double red zone represents below 30% TEE and beyond. This zone should be avoided unless under careful supervision. In this zone your body will go into "survival mode" and begin to consume muscle to feed vital organs, while also trying to hold fat as energy reserves.</li>
                    </ul>
                </div>
                <div className="div4Style">
                    <p className="warningStyle">This calculator is not meant to substitute the advice of a physician or health professional. Rather it is a way for you to easily gauge your general caloric needs. Use it at your at own risk as we cannot be held liable for any damages that arise due to its use.</p>
                </div>
            </div>
        </div>
    )
}

export default FooterInfo