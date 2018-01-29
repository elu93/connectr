import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';
import styled from 'styled-components'
import NavBar from './styled_components/NavBar'
import Connectr from '../connectr_img.png'

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 50vw;
    margin: 10vh auto;
    border: 1px solid black;

    h4 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30vw;
    }

    @media only screen and (max-width: 625px) {
        width: 100vw;
    }

`


const RemoveLinkUnderlines = styled.a`
    a:link {
        text-decoration: none;
        color: black;
    }

    a:visited {
        text-decoration: none;
        color: black;
    }
`


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
                        price: res.data.price,
                        eventImage: res.data.eventImage
                    }
                    this.setState({event})
                })
        }
    }

    render() {
        return(
                <div>
                    <NavBar>
                    <header>
                        <Link to="/"><img src={Connectr}/></Link>
                    </header>
                </NavBar>
                <FlexContainer>
                <h1>{this.state.event.eventName}</h1>
                <h3>Address: {this.state.event.location}</h3>
                <h3>Date: {this.state.event.date}</h3>
                <h3>Price: ${this.state.event.price}</h3>
                <p><img src={this.state.event.eventImage}/></p>
                </FlexContainer>
                </div>
        )
    }
}

export default EventPage