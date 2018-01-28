import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom'
import axios from 'axios'
import InterestPage from './InterestPage'
import styled from 'styled-components'
import Button from './styled_components/Button'
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

class AddNewUser extends Component {

    state = {
        newUser: {}
    }

    render() {
        return (
            <div>
                        <CardWrapper>
                            <h1>New User</h1>
                            <br/>
                            <form onSubmit={this.props.handleSignUp}>
                                <div>
                                    <label htmlFor="userName">User Name</label>
                                    <CardInput
                                        onChange={this.props.handleChange}
                                        name="userName"
                                        type="text"
                                        value={this.state.userName}/>
                                </div>
                                <div>
                                    <label htmlFor="firstName">First Name</label>
                                    <CardInput
                                        onChange={this.props.handleChange}
                                        name="firstName"
                                        type="text"
                                        value={this.state.firstName}/>
                                </div>
                                <div>
                                    <label htmlFor="lastName">Last Name</label>
                                    <CardInput
                                        onChange={this.props.handleChange}
                                        name="lastName"
                                        type="text"
                                        value={this.state.lastName}/>
                                </div>
                                <div>
                                    <label htmlFor="age">Age</label>
                                    <CardInput
                                        onChange={this.props.handleChange}
                                        name="age"
                                        type="text"
                                        value={this.state.age}/>
                                </div>
                                <div>
                                    <label htmlFor="photoUrl">Photo Avatar</label>
                                    <CardInput
                                        onChange={this.props.handleChange}
                                        name="photoUrl"
                                        type="text"
                                        value={this.state.photoUrl}/>
                                </div>
                                <div>
                                    <label htmlFor="biography">Biography</label>
                                    <CardInput
                                        onChange={this.props.handleChange}
                                        name="biography"
                                        type="text"
                                        value={this.state.biography}/>
                                </div>
                                <br/>
                                <CardButton type="submit">Submit</CardButton>
                            </form>
                        </CardWrapper>
                    </div>
        )
    }
}

export default AddNewUser