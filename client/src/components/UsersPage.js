import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class HomePage extends Component {

    state = {
        users: []
    }

    componentWillMount() {
        axios.get('/api/users')
        .then(res => {
            const users = res.data
            this.setState({users})
        })
        .catch((error) => {
            console.error("NEW ERROR", error)
        })
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
            </div>
        )
    }
}

export default HomePage
