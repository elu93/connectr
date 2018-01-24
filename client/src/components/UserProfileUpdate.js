import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import axios from 'axios'
import InterestPage from './InterestPage'

class UserProfileUpdate extends Component {

    state = {
        updatedUser: {}
    }

    updateNewUser = (event) => {
        event.preventDefault()
        this.props.updateUser(this.state.updatedUser)
        console.log(this.state.updatedUser)
    }
    render() {
        return (
            <div>
                    <h1>Update User</h1>
                    <form onSubmit={this.props.handleSignUp}>
                        <div>
                            <label htmlFor="userName">User Name</label>
                            <input
                                onChange={this.props.handleChange}
                                name="userName"
                                type="text"
                                value={this.state.userName}/>
                        </div>
                        <div>
                            <label htmlFor="firstName">First Name</label>
                            <input
                                onChange={this.props.handleChange}
                                name="firstName"
                                type="text"
                                value={this.state.firstName}/>
                        </div>
                        <div>
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                onChange={this.props.handleChange}
                                name="lastName"
                                type="text"
                                value={this.state.lastName}/>
                        </div>
                        <div>
                            <label htmlFor="age">Age</label>
                            <input
                                onChange={this.props.handleChange}
                                name="age"
                                type="text"
                                value={this.state.age}/>
                        </div>
                        <input type="submit" value="Edit User"/>
                    </form>
                </div>
        )
    }
}

export default UserProfileUpdate