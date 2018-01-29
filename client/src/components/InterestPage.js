import React, {Component} from 'react'
import {Redirect, Link} from 'react-router-dom';
import axios from 'axios'
import UserProfileUpdate from './UserProfileUpdate'
import styled from 'styled-components'
import NavBar from './styled_components/NavBar'
import Connectr from '../connectr_img.png'
import {
    CardWrapper,
    CardHeader,
    CardHeading,
    CardBody,
    CardFieldset,
    CardInput,
    CardIcon,
    CardOptionsNote,
    CardOptions,
    CardOptionsItem,
    CardButton,
    CardLink
    } from "./styled_components/Card";
import AddNewInterest from './AddNewInterest';

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

    @media only screen and (max-width: 600px) {
        font-size: .75em;
    }
`

const FlexContainerRow = FlexContainer.extend`
    flex-direction: row;
    text-align: left;
`

const Button = styled.button`
    color: #4ee85e;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #4ee85e;
    border-radius: 3px;
`;

const FlexPictures = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 0 auto;
    
`

const UpdateUserButton = CardButton.extend`
    width: 25%;
`

const PaddingLeft = styled.div`
    padding: 5%;
`

const PaddingInterests = styled.div`
    padding: 2%;
    margin-bottom: 10%;
`

const ImagePadding = styled.img`
    padding: 1%;
`

class InterestPage extends Component {
    state = {
        user: {},
        interests: [],
        newInterest: {},
        showUpdatePage: false,
        showAddInterestPage: false
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
                        biography: res.data.biography,
                        interests: res.data.interests
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

    addInterest = async() => {
        const response = await axios.post(`/api/users/${this.state.user._id}/interest`, this.state.newInterest)
        const newInterest = response.data.interests
        console.log(newInterest)
        const newInterests = [...this.state.interests]
        newInterests.unshift(newInterest)
        this.setState({interests: newInterests, showAddInterestPage: false})
    }

    handleInterestAdd = (event) => {
        this.addInterest()
    }

    handleInterestChange = (event) => {
        const newInterest = {
            ...this.state.newInterest
        }
        newInterest[event.target.name] = event.target.value
        this.setState({newInterest})
    }

    showAddInterestComponent = () => {
        this.setState({showAddInterestPage: true})
    }

    render() {
        const user = this.state.user
        console.log(user)
        const interests = this.state.interests
        console.log(interests)
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
                            <Button onClick={this.showUpdateComponent}>Update User</Button>
                            <div>
                                <h4>{this.state.user.biography}</h4>
                            </div>
                        </PaddingLeft>
                        </FlexContainerRow>
                    </div>
                    {this.state.showAddInterestPage ? <AddNewInterest
                    addInterest={this.addInterest}
                    handleInterestAdd={this.handleInterestAdd}
                    handleInterestChange={this.handleInterestChange}
                    /> :
                    <div>
                        <h1>Interests</h1>
                        <Button onClick={this.showAddInterestComponent}>Add New Interest</Button>
                        <FlexPictures>
                            {this
                                .state
                                .interests
                                .map((interest, index) => {
                                    return (
                                            <PaddingInterests>
                                                <Link to={`/user/${user._id}/interest/${interest._id}`}> 
                                                <figure className="imghvr-fade">
                                                <img src={interest.interestPhoto}/>
                                                <figcaption>
                                                    {interest.interestName}
                                                </figcaption>
                                                </figure>        
                                                </Link>
                                            </PaddingInterests>
                                    )
                                })}
                        </FlexPictures>
                    </div>}
                </FlexContainer> }
                <NavBar>
                    <p>Made by Eric Lu @ 2018</p>
                </NavBar>
            </div>
        );
    }
}

export default InterestPage