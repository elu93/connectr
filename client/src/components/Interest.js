import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios'
class Interest extends Component {

    state = {
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
                    this.setState({interest, events})
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
                            <p>{event.eventName}</p>
                        )
                    })}
            </p>
            </div>
        )
    }
}

export default Interest