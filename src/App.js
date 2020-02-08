import React from 'react'
import { Route, Switch } from 'react-router-dom'

import AppBar from './components/appbar/AppBar'

import HomePage from './pages/HomePage'
import CalorieZones from './pages/CalorieZones'
// start on the left and let the blocks build up 
// div issue starts at below 844
// add mobile accessibility design
// refactor form code using custom hooks
// refactor large chunks of code

function App() {
  const mainStyle = {
    paddingBottom: 100,
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
    </div>
  )
}

export default App
