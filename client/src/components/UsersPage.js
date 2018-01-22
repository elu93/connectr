import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class HomePage extends Component {

    state = {
        users: []
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

    createUser = () => {
        axios
            .post('/api/users', {user: this.state.user})
            .then((res) => {
                this.setState({redirectToHome: true, createdUser: res.data})
            })
    }

    handleChange = (event) => {
        const user = {
            ...this.state.user
        }
        user[event.target.name] = event.target.value
        this.setState({user})
    }

    handleSignUp = (event) => {
        event.preventDefault()
        this.createUser()
    }

    render() {
        return (
            <div>
                <h1>Users</h1>
                <h3>Selection of Users</h3>
                {this
                    .state
                    .users
                    .map((user, index) => {
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
                        <div>
                            <label htmlFor="interests">Interests</label>
                            <input
                                onChange={this.handleChange}
                                name="interests"
                                type="text"
                                value={this.state.interests}/>
                        </div>
                        <button>Sign Up</button>
                    </form>
                </div>
            </div>

        )
    }
}

export default HomePage
