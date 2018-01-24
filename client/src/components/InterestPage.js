import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios'
import UserProfileUpdate from './UserProfileUpdate'

class InterestPage extends Component {
    state = {
        user: {},
        interests: []
    }

    componentWillMount() {
        if (this.props.match.params) {
            const {userId} = this.props.match.params
            axios.get(`/api/users/${userId}`)
                .then(res => {
                    const user = {
                        _id: res.data._id,
                        userName: res.data.userName,
                        firstName: res.data.firstName,
                        lastName: res.data.lastName,
                        age: res.data.age,
                    }
                    const interests = res.data.interests
                    this.setState({user, interests})
                })
        }
    }

    updateUser = async() => {
        try {
            const response = await axios.patch(`/api/users/${this.state.user._id}`, this.state.user)
            const updatedUser = response.data
            console.log(updatedUser)
            this.setState({updatedUser})
        } catch (error) {
            console.log(error)
        }
    }

    handleChange = (event) => {
        const updateUser = {...this.state.user}
        updateUser[event.target.name] = event.target.value
        this.setState({user: updateUser})
    }

    handleSignUp = (event) => {
        console.log(`Event: `, event.target)
        event.preventDefault()
        this.updateUser()
    }

    render() {
        const user = this.state.user
        console.log(user)
        return (
            <div>
                <h1>Interests</h1>
                <p>{this.state.user.userName}</p>
                <p>{this.state.user.firstName}</p>
                <p>{this.state.user.lastName}</p>
                <p>{this.state.user.age}</p>
                <div>
                    Interests:
                <p>
                    {this.state.interests.map((interest, index) => {
                            return (
                                <Link to={`/user/${user._id}/interest/${interest._id}`}>{interest.interestName}, </Link>
                            )
                        })}
                </p>
                </div>
                <Link to="/login ">Back to Home</Link>< br /> 
                <UserProfileUpdate updateUser={this.updateUser} handleSignUp={this.handleSignUp} handleChange={this.handleChange}/>
            </div>
        );
    }
}

export default InterestPage