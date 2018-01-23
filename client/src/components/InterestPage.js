import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios'
class InterestPage extends Component {

    state = {
        user: {},
        interests: []
    }

    componentWillMount() {
        const {match: {
                params
            }} = this.props
        axios
            .get(`/api/users/${params.userId}`)
            .then(({data: user}) => {
                console.log('user', user)
                this.setState({user})
            })
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
            </div>
        );
    }
}

export default InterestPage