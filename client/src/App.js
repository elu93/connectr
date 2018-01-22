import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'
import HomePage from './components/HomePage'
import UserPage from './components/UserPage'
import InterestPage from './components/InterestPage'
import EventPage from './components/EventPage'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            {/* <Route path="/login" component={LogInPage}/>
            <Route path="/user/:userId" component={InterestPage}/> */}
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
