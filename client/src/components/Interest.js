import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios'
class Interest extends Component {

    state = {
        userId: '',
        interest: {},
        events: []
    }

    componentWillMount() {
        if (this.props.match.params) {
            const {userId} = this.props.match.params
            const {interestId} =this.props.match.params
            axios.get(`/api/users/${userId}/interest/${interestId}`)
                .then(res => {
                    const interest = {
                        _id: res.data._id,
                        interestName: res.data.interestName,
                    }
                    const events = res.data.events
                    this.setState({userId, interest, events})
                    console.log(this.state.userId)
                })
        }
    }

    render() {
        return (
            <div>
            <h1>Interests</h1>
            <p>{this.state.interest.interestName}</p>
                Events:
            <p>
                {this.state.events.map((event, index) => {
                        return (
                            <Link to={`/user/${this.state.userId}/interest/${this.state.interest._id}/event/${event._id}`}> {event.eventName} </Link>
                        )
                    })}
            </p>
            </div>
        )
    }
}

export default Interest