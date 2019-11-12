import React from 'react'
import ZoneForm from './components/zone_form'
import NavBar from './components/appbar'
import FooterInfo from './components/footer_info'
// start on the left and let the blocks build up 

function App() {
  const mainStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    paddingBottom: 100,
    fontFamily: "'Nunito Sans'",
  }

  const containerStyle = {
    position: "relative",
    height: 260,
    background: "rgba(201, 56, 56, 1)",
    width: "100%",
    zIndex: -1,
    filter: "drop-shadow(4px 4px 5px gray)"
  }

  const h1Style = {
    position: "absolute",
    paddingTop: 90,
    fontSize: 68,
    left: 37,
    paddingRight: 10,
    color: "black",
    zIndex: 5,
    fontFamily: "'Fira Sans', sans-serif"
  }

  const style = {
    position: "absolute",
    left: 45,
    top: -430,
    fontSize: 800,
    color: "white",
    transform: "rotate(45deg)",
    overflow: "hidden",
    borderRadius: 100
  }

  return (
    <div style={mainStyle}>
      <NavBar />
      <div style={containerStyle}>
        <h1 style={h1Style}>Calorie Zones</h1>
        <h1 style={style}>+</h1>
      </div>
      <ZoneForm />
      <FooterInfo />
    </div>
    )
}

export default App;
