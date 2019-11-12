import React from 'react';

const Explainer = ({style}) => {
    const pStyle = {
        width: "100%",
        textAlign: "center",
        paddingTop: 10
    }

    const h1Style = {
        width: "100%",
        textAlign: "center"
    }

    const aStyle = {
        textDecoration: "none",
        color: "#c93838"
    }

    return (
        <div style={style}>
            <h1 style={h1Style}>Calculate Your Calorie Zones</h1>
            <p style={pStyle}>This tool allows you to easily calculate your daily caloric needs based upon your weight loss goals by leveraging the reformed <a style={aStyle} href="https://en.wikipedia.org/wiki/Harris%E2%80%93Benedict_equation">Harris-Benendict equation (1990)</a>.</p>
            <p style={pStyle}>The 95% confidence range for men is &#xb1;213.0kcal/day and &#xb1;201.0kcal/day for women. In otherwords, you can be 95% confident that your actual daily caloric needs are between about plus or minus 200 calories of your result.</p>
        </div>
    )
}

export default Explainer