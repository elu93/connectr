import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import styled from 'styled-components'
import UsersPage from './components/UsersPage'

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
            <Route path="/login" component={UsersPage}/>
            {/* <Route path="/user/:userId" component={IdeaPage}/> */}
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App