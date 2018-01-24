import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';


class EventPage extends Component {

    state = {
        event: {}
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
                        location: res.data.location,
                        date: res.data.date,
                        price: res.data.price
                    }
                    this.setState({event})
                })
        }
    }

    render() {
        return(
            <div>
                Event
                <p>{this.state.event.eventName}</p>
                <p>{this.state.event.location}</p>
                <p>{this.state.event.date}</p>
                <p>{this.state.event.price}</p>
            </div>
            
        )
    }
}

export default EventPage