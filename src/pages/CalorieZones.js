import React from 'react'

import ZoneFormRefactored from '../components/zoneForm/ZoneFormRefactored'
import ZoneInfo from '../components/zone-info/ZoneInfo'
// start on the left and let the blocks build up 
// div issue starts at below 844
// add mobile accessibility design
// refactor form code using custom hooks
// refactor large chunks of code

const CalorieZones = () => {

  const formPosition = {
    display: 'flex',
    justifyContent: 'center'
  }

  return (
      <div>
        <div style={formPosition}>
          <ZoneFormRefactored />
        </div>
        <ZoneInfo />
      </div>

    )
}

export default CalorieZones