import React from "react";

import './ZoneInfo.styles.css'

const ZoneInfo = ({para, zone, head}) => {

    return (
        <div>
            <h1 className="zonePadding">{zone}</h1>
            <h2 className="zonePadding">{head}</h2>
            <h3 className="zonePadding">{para}</h3>
        </div>
    )
}

export default ZoneInfo