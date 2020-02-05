import React from 'react'
import { BreakpointProvider } from 'react-socks'
import ZoneForm from './components/zoneForm/ZoneForm'
import NavBar from './components/appbar/AppBar'
import FooterInfo from './components/footerInfo/FooterInfo'
import Header from './components/header/Header'
import Modal from './Modal'
// start on the left and let the blocks build up 
// div issue starts at below 844
// add mobile accessibility design
// refactor form code using custom hooks
// refactor large chunks of code

function App() {
  const mainStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    overflowX: 'hidden',
    overflowY: 'hidden',
    paddingBottom: 100,
    fontFamily: 'Nunito Sans',
  }

  return (
      <div style={mainStyle}>
        <NavBar />
        <BreakpointProvider>
          <Header />
        </BreakpointProvider>
        <BreakpointProvider>
          <ZoneForm />
        </BreakpointProvider>
        <FooterInfo />
        <Modal />
      </div>
    )
}

export default App;
