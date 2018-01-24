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

    deleteUser = async(user) => {
        try {
            await axios.delete(`/api/ideas/${user._id}`) // Ask the server to delete this idea
            const indexToDelete = this
                .state
                .users
                .indexOf(user) // Determine where in our ideas array it lived
            const newUsers = [...this.state.users] // copy the old ideas list into a new one
            newUsers.splice(indexToDelete, 1) // remove the idea we deleted from this new array
            this.setState({users: newUsers})
        } catch (error) {
            console.log(error)
        }
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
                <p>
                    {this
                        .state
                        .users
                        .map((user, index) => {
                            return (
                                <div>
                                    <Link to={`/user/${user._id}`}>{user.userName}</Link>
                                    <input type="submit" value="Delete User"onClick={() => {this.deleteUser}}></input>
                                </div>
                                
                            )
                        })}
                </p>

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
