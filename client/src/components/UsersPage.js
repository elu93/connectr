import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import axios from 'axios'
import InterestPage from './InterestPage'
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

const UserShowPage = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    h1 {
        margin: 0;
        vertical-align: middle;
    }
`

class UsersPage extends Component {

    state = {
        users: [],
        newUser: {}
    }

    componentWillMount() {
        axios
            .get('/api/users')
            .then(res => {
                const users = res.data
                this.setState({users})
            })
            .catch((error) => {
                console.error("NEW ERROR", error)
            })
    }

    createUser = async() => {
        const response = await axios.post(`/api/users`, this.state.newUser)
        const newUser = response.data
        const newUsers = [...this.state.users]
        newUsers.unshift(newUser)
        this.setState({users: newUsers})
    }

    deleteUser = async(user) => {
        try {
            await axios.delete(`/api/users/${user._id}`)
            const indexToDelete = this.state.users.indexOf(user)
            const newUsers = [...this.state.users]
            newUsers.splice(indexToDelete, 1)
            this.setState({users: newUsers})
        } catch (error) {
            console.log(error)
        }
    }

    handleChange = (event) => {
        const newUser = {
            ...this.state.newUser
        }
        newUser[event.target.name] = event.target.value
        this.setState({newUser})
    }

    handleSignUp = (event) => {
        console.log(`Event: ${event}`)
        event.preventDefault()
        this.createUser()
    }

    render() {
        return (
            <UserShowPage>
                <div>
                <NavBar>
            <header>
                <img src={Connectr}/>
            </header>
            </NavBar>
                <h1>Users</h1>
                <h3>Selection of Users</h3>
                <p>
                    {this.state.users.map((user, index) => {
                            return (
                                <div>
                                    <Link to={`/user/${user._id}`}><img src={user.photoUrl} alt={user.userName}/></Link>
                                    <p>{user.userName}</p>
                                    <input type="submit" value="Delete User" onClick={() => {this.deleteUser(user)}}></input>
                                </div>    
                            )
                        })}
                </p>

                <div>
                    
                    <CardWrapper>
                    <h1>New User</h1>
                    <br/>
                    <form onSubmit={this.handleSignUp}>
                        <div>
                            <label htmlFor="userName">User Name</label>
                            <CardInput
                                onChange={this.handleChange}
                                name="userName"
                                type="text"
                                value={this.state.userName}/>
                        </div>
                        <div>
                            <label htmlFor="firstName">First Name</label>
                            <CardInput
                                onChange={this.handleChange}
                                name="firstName"
                                type="text"
                                value={this.state.firstName}/>
                        </div>
                        <div>
                            <label htmlFor="lastName">Last Name</label>
                            <CardInput
                                onChange={this.handleChange}
                                name="lastName"
                                type="text"
                                value={this.state.lastName}/>
                        </div>
                        <div>
                            <label htmlFor="age">Age</label>
                            <CardInput
                                onChange={this.handleChange}
                                name="age"
                                type="text"
                                value={this.state.age}/>
                        </div>
                        <input type="submit" value="New User"/>
                    </form>
                    </CardWrapper>
                </div>
            </div>
            </UserShowPage>
        )
    }
}

export default UsersPage
