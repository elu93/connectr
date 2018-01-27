import React, {Component} from 'react'
import {Redirect, Link} from 'react-router-dom';
import axios from 'axios'
import UserProfileUpdate from './UserProfileUpdate'
import styled from 'styled-components'
import NavBar from './styled_components/NavBar'
import Connectr from '../connectr_img.png'

const FlexContainer = styled.div `
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

const FlexContainerRow = FlexContainer.extend`
    flex-direction: row;
    text-align: left;
`

const PaddingLeft = styled.div`
    padding: 5%;
`

const RemoveLinkUnderlines = styled.a `
    a:link {
        text-decoration: none;
        color: black;
    }

    a:visited {
        text-decoration: none;
        color: black;
    }
`

class InterestPage extends Component {
    state = {
        user: {},
        interests: [],
        showUpdatePage: false
    }

    componentWillMount() {
        if (this.props.match.params) {
            const {userId} = this.props.match.params
            axios
                .get(`/api/users/${userId}`)
                .then(res => {
                    const user = {
                        _id: res.data._id,
                        userName: res.data.userName,
                        firstName: res.data.firstName,
                        lastName: res.data.lastName,
                        age: res.data.age,
                        photoUrl: res.data.photoUrl,
                        biography: res.data.biography
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
            this.setState({updatedUser, showUpdatePage: false})
        } catch (error) {
            console.log(error)
        }
    }

    showUpdateComponent = () => {
        this.setState({showUpdatePage: true})
    }

    handleChange = (event) => {
        const updateUser = {
            ...this.state.user
        }
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
                <NavBar>
                    <header>
                        <Link to="/"><img src={Connectr}/></Link>
                    </header>
                </NavBar>
                {this.state.showUpdatePage ?  <UserProfileUpdate
                    updateUser={this.updateUser}
                    handleSignUp={this.handleSignUp}
                    handleChange={this.handleChange}
                    /> :
                <FlexContainer>
                    <div>
                    <h1>User Profile</h1>
                    <FlexContainerRow>
                        <p className="img-block"><img src={this.state.user.photoUrl}/></p>
                        <PaddingLeft>
                            <p>Username: {this.state.user.userName}</p>
                            <p>Name: {this.state.user.firstName} {this.state.user.lastName}</p>
                            <p>Age: {this.state.user.age}</p>
                            <h3>User Bio:</h3>
                            <button onClick={this.showUpdateComponent}>Click me To update</button>
                            <paragraphContainer>
                                <h4>{this.state.user.biography}</h4>
                            </paragraphContainer>
                        </PaddingLeft>
                        </FlexContainerRow>
                    </div>
                    
                    <div>
                        <h1>Interests</h1>
                        <p>
                            {this
                                .state
                                .interests
                                .map((interest, index) => {
                                    return (
                                        <RemoveLinkUnderlines>
                                            <span>
                                                <Link to={`/user/${user._id}/interest/${interest._id}`}><img src={interest.interestPhoto}/></Link>
                                            </span>
                                        </RemoveLinkUnderlines>
                                    )
                                })}
                        </p>
                    </div>
                </FlexContainer> }
            </div>
        );
    }
}

export default InterestPage