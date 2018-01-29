import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios'
import styled from 'styled-components'
import NavBar from './styled_components/NavBar'
import Connectr from '../connectr_img.png'

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h4 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30vw;
    }
`

const InterestEvents = styled.p`
    margin-bottom: 5%;
`

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
                        yearsOfExperience: res.data.yearsOfExperience,
                        level: res.data.level,
                        interestPhoto: res.data.interestPhoto
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
                <NavBar>
                    <header>
                        <Link to="/"><img src={Connectr}/></Link>
                    </header>
                </NavBar>
            <div>
            <FlexContainer>
            <h1>{this.state.interest.interestName}</h1>
            <img src={this.state.interest.interestPhoto}/>
            <p>Years of Experience: {this.state.interest.yearsOfExperience}</p>
            <p>Level: {this.state.interest.level}</p>
            <h3>Events:</h3>
            <InterestEvents>
                {this.state.events.map((event, index) => {
                        return (
                            <Link to={`/user/${this.state.userId}/interest/${this.state.interest._id}/event/${event._id}`}> {event.eventName} </Link>
                        )
                    })}
            </InterestEvents>
            </FlexContainer>
            </div>
            <NavBar>
                    <p>Made by Eric Lu @ 2018</p>
                </NavBar>
            </div>
        )
    }
}

export default Interest