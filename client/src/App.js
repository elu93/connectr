import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import UsersPage from './components/UsersPage'
import InterestPage from './components/InterestPage'
import Interest from './components/Interest'
import Events from './components/EventPage'
import HomePage from './components/HomePage'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/login" component={UsersPage}/>
            <Route exact path="/user/:userId" component={InterestPage}/>
            <Route exact path="/user/:userId/interest/:interestId" component={Interest}/>
            <Route exact path="/user/:userId/interest/:interestId/event/:eventId" component={Events}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App