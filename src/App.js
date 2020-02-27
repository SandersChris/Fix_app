import React from 'react'
import { Route, Switch } from 'react-router-dom'

import AppBar from './components/appbar/AppBar'

import HomePage from './pages/HomePage'
import CalorieZones from './pages/CalorieZones'
import EmailContact from './components/email-contact/EmailContact'
import Footer from './components/footer/Footer'
// start on the left and let the blocks build up 
// div issue starts at below 844
// add mobile accessibility design
// refactor form code using custom hooks
// refactor large chunks of code

function App() {
  const mainStyle = {
    fontFamily: 'Nunito Sans',
    overflowX: 'hidden',
    overflowY: 'hidden'
  }

  return (
    <div style={mainStyle}>
      <AppBar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/caloriezones' component={CalorieZones} />
      </Switch>
      <EmailContact />
      <Footer />
    </div>
  )
}

export default App
