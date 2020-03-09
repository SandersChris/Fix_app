import React from 'react';
import './Explainer.styles.css'

const Explainer = ({ className }) => {

    return (
        <div className={className}>
            <h2>Calculate Your Calorie Zones</h2>
            <p className="pStyle">This tool allows you to easily calculate your daily caloric needs based upon your weight loss goals by leveraging the reformed <a className="aStyle" href="https://en.wikipedia.org/wiki/Harris%E2%80%93Benedict_equation">Harris-Benendict equation (1990)</a>.</p>
            <p className="pStyle">The 95% confidence range for men is &#xb1;213.0kcal/day and &#xb1;201.0kcal/day for women. In otherwords, you can be 95% confident that your actual daily caloric needs are between about plus or minus 200 calories of your result.</p>
        </div>
    )
}

export default Explainer