import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';


class EventPage extends Component {

    state = {
        userId: '',
        interestId: '',
        events: {}
    }

    componentWillMount() {
        if (this.props.match.params) {
            const {userId} = this.props.match.params
            const {interestId} =this.props.match.params
            const {eventId} = this.props.match.params
            axios.get(`/api/users/${userId}/interest/${interestId}/event/${eventId}`)
                .then(res => {
                    const event = {
                        _id: res.data._id,
                        eventName: res.data.eventName,
                    }
                    const events = res.data.events
                    this.setState({userId, interestId, events})
                })
        }
    }

    render() {
        const events = {...this.state.events}
        console.log(this.state.events)
        return(
            <div>
                Hello From Events!
                <div>
                    Events:
                <p>
                    {events.eventName}
                </p>
                </div>
            </div>
            
        )
    }
}

export default EventPage