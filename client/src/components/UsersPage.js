import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import axios from 'axios'
import InterestPage from './InterestPage'

class UsersPage extends Component {

    state = {
        users: [],
        newUser: {}
    }

    componentWillMount() {
        axios
            .get('/api/users')
            .then(res => {
                const users = res.data
                this.setState({users})
            })
            .catch((error) => {
                console.error("NEW ERROR", error)
            })
    }

    
    createUser = async() => {
        const response = await axios.post(`/api/users`, this.state.newUser)
        const newUser = response.data
        const newUsers = [...this.state.users]
        newUsers.unshift(newUser)
        this.setState({users: newUsers})
    }

    handleChange = (event) => {
        const newUser = {
            ...this.state.newUser
        }
        newUser[event.target.name] = event.target.value
        this.setState({newUser})
    }

    handleSignUp = (event) => {
        console.log(`Event: ${event}`)
        event.preventDefault()
        this.createUser()
    }

    render() {
        
        return (
            <div>
                <h1>Users</h1>
                <h3>Selection of Users</h3>
                {this.state.users.map((user, index) => {
                        return (
                            <Link to={`/user/${user._id}`}>{user.userName}</Link>
                        )
                    })}
                <div>
                    <h1>New User</h1>
                    <form onSubmit={this.handleSignUp}>
                        <div>
                            <label htmlFor="userName">User Name</label>
                            <input
                                onChange={this.handleChange}
                                name="userName"
                                type="text"
                                value={this.state.userName}/>
                        </div>
                        <div>
                            <label htmlFor="firstName">First Name</label>
                            <input
                                onChange={this.handleChange}
                                name="firstName"
                                type="text"
                                value={this.state.firstName}/>
                        </div>
                        <div>
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                onChange={this.handleChange}
                                name="lastName"
                                type="text"
                                value={this.state.lastName}/>
                        </div>
                        <div>
                            <label htmlFor="age">Age</label>
                            <input
                                onChange={this.handleChange}
                                name="age"
                                type="text"
                                value={this.state.age}/>
                        </div>
                        <input type="submit" value="New User"/>
                    </form>
                </div>
            </div>

        )
    }
}

export default UsersPage
