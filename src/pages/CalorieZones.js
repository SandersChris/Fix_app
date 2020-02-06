import React from 'react'
import { BreakpointProvider } from 'react-socks'
import ZoneForm from '../components/zoneForm/ZoneForm'
import FooterInfo from '../components/footerInfo/FooterInfo'
import Header from '../components/header/Header'
// start on the left and let the blocks build up 
// div issue starts at below 844
// add mobile accessibility design
// refactor form code using custom hooks
// refactor large chunks of code

const CalorieZones = () => {

    const mainStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%"
      }

  return (
      <div style={mainStyle}>
        <BreakpointProvider>
            <Header title='Calorie Zones' />
        </BreakpointProvider>
        <BreakpointProvider>
          <ZoneForm />
        </BreakpointProvider>
        <FooterInfo />
      </div>
    )
}

export default CalorieZones