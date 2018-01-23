import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import styled from 'styled-components'
import UsersPage from './components/UsersPage'
import InterestPage from './components/InterestPage'
import Interest from './components/Interest'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Link to='/login'>Home</Link>
          </div>
          <Switch>
            {/* <Route exact path="/" component={HomePage}/> */}
            <Route exact path="/login" component={UsersPage}/>
            <Route exact path="/user/:userId" component={InterestPage}/>
            <Route exact path="/user/:userId/interest/:interestId" component={Interest}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App