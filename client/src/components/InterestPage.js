import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios'
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

    deleteUser = async(user) => {
        try {
            await axios.delete(`/api/users/${user._id}`) // Ask the server to delete this idea
            const indexToDelete = this.state.users.indexOf(user) // Determine where in our ideas array it lived
            const newUsers = [...this.state.users]
            newUsers.splice(indexToDelete, 1)
            this.setState({users: newUsers})
        } catch (error) {
            console.log(error)
        }
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
                <input type="submit" value="Delete User" onClick={() => {this.deleteUser}}></input>
            </div>
        );
    }
}

export default InterestPage