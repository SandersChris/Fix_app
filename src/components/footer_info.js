import React from "react";

const FooterInfo = () => {
    const divStyle = {
        paddingTop: 40,
        width: "92%",
        maxWidth: 1250,
        height: "auto",
    }

    const h2Style = {
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        borderBottom: "0.10px",
        borderStyle: "solid",
        borderTopColor: "black",
        width: "100%",
        paddingBottom: 5        
    }

    const p1Style = {
        maxWidth: "43vw",
        paddingTop: 5,
        float: "left"
    }

    const aStyle = {
        textDecoration: "none",
        color: "#c93838"
    }

    const p3Style = {
        maxWidth: "45vw",
    }

    const warningStyle = {
        maxWidth: "45vw",
        paddingTop: 20,
        paddingLeft: 8,
        paddingRight: 8
    }

    const interpretStyle = {
        width: "45%"
    }

    const div1Style = {
        height: 100
    }

    const div2Style = {
        paddingTop: 5,
    }

    const div3Style = {
        position: "relative",
        bottom: 40
    }

    const div4Style = {
        backgroundColor: "rgba(250, 84, 119, 0.3)",
        height: "35%",
        width: "97%",
        borderRadius: 3
    }

    const parentDivStyle = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr 1fr",
        columnGap: 50,
        rowGap: 20,
        height: 140
    }

    const listStyle = {
        paddingLeft: 25,
        listStyleType: "square",
        paddingTop: 5
    }
    
    const liStyle = {
        paddingTop: 3
    }

    return (
        <div style={divStyle}>
                <h2 style={h2Style}>What are Calorie Zones?</h2>
            <div style={parentDivStyle}>
                <div style={div1Style}>   
                    <p style={p1Style}>Calorie zones are a tool that helps conceptualize scientific studies concerning calorie intake and weight loss. It may come as a surprise to hear that this is one of the only resources you will ever need while working toward your dietary goals. However, this tool, combined with a <a style={aStyle} href="https://www.hsph.harvard.edu/nutritionsource/healthy-eating-plate/">balanced diet</a> and exercise is truly all there is to it! For more info on calorie zones, click <a style={aStyle} href="https://thefixgym.com/the-fix-life-blog/">here</a>.</p>
                </div>
                <div style={div2Style}>
                    <p style={p3Style}>It should be noted that your results will vary depending on your body type. For example, an invidual with a high lean body mass (muscular) percentage will require more calories than the given results, while a person with a high body fat percentage will need less. Most health experts agree that a pound of muscle burns about 10 to 15 calories at rest, while a pound of fat burns roughly 2 calories at rest. This <a style={aStyle} href="https://www.unm.edu/~lkravitz/Article%20folder/metabolismcontroversy.html">article</a> from the University of New Mexico provides a lot of great information on the topic.</p>
                </div>
                <div style={div3Style}>
                    <h3 style={interpretStyle}>Interpretations</h3>
                    <p style={p3Style}>When you enter in your info and hit calculate, you will be shown 6 outputs. Your <a style={aStyle} href="https://en.wikipedia.org/wiki/Basal_metabolic_rate">BMR</a>, <a style={aStyle} href="https://en.wikipedia.org/wiki/Physical_activity_level">TEE</a>, and 4 zones. The interpretation here will focus primarily on the 4 zones. Any increase in lean body mass depends upon your exercise regimen.</p>
                    <ul style={listStyle}>
                        <li style={liStyle}>The red zone represents 15% above and beyond your TEE. In this zone you will still put on lean body mass but the surplus of calories will cause fat gain as well.</li>
                        <li style={liStyle}>The yellow zone represents your homeostasis. If you stay within this zone, particularily at your given TEE, you will gain lean body mass but maintain fat.</li>
                        <li style={liStyle}>The green zone represents any caloric intake below 15% and above 30% of your TEE. For most people, this is the desired zone, as it allows an individual to gain/maintain lean body mass while losing fat.</li>
                        <li style={liStyle}>The double red zone represents below 30% TEE and beyond. This zone should be avoided unless under careful supervision. In this zone your body will go into "survival mode" and begin to consume muscle to feed vital organs, while also trying to hold fat as energy reserves.</li>
                    </ul>
                </div>
                <div style={div4Style}>
                    <p style={warningStyle}>This calculator is not meant to substitute the advice of a physician or health professional. Rather it is a way for you to easily gauge your general caloric needs. Use it at your at own risk as we cannot be held liable for any damages that arise due to its use.</p>
                </div>
            </div>
        </div>
    )
}

export default FooterInfo