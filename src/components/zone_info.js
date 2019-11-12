import React from "react";

const ZoneInfo = ({para, zone, head}) => {
    const zonePadding = {
        paddingTop: 13
    }

    return (
        <div>
            <h1 style={zonePadding}>{zone}</h1>
            <h2 style={zonePadding}>{head}</h2>
            <h3 style={zonePadding}>{para}</h3>
        </div>
    )
}

export default ZoneInfo