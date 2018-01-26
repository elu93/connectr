import React, {Component} from 'react'
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

class UserProfileUpdate extends Component {

    state = {
        updatedUser: {},
        redirect: false
    }

    updateUserAgain = async () => {
        this.props.handleSignUp()
    }

    render() {
        return (
            <div>
                {this.state.redirect ? <Redirect to="/user/:userId"></Redirect> :
                    <CardWrapper>
                    <h1>Update User</h1>
                    <form onSubmit={this.updateUserAgain}>
                        <div>
                            <label htmlFor="userName"></label>
                            <CardInput
                                onChange={this.props.handleChange}
                                name="userName"
                                type="text"
                                value={this.state.updatedUser.userName}
                                placeholder="Username"/>
                        </div>
                        <div>
                            <label htmlFor="firstName"></label>
                            <CardInput
                                onChange={this.props.handleChange}
                                name="firstName"
                                type="text"
                                value={this.state.updatedUser.firstName}
                                placeholder="First Name"/>
                        </div>
                        <div>
                            <label htmlFor="lastName"></label>
                            <CardInput
                                onChange={this.props.handleChange}
                                name="lastName"
                                type="text"
                                value={this.state.updatedUser.lastName}
                                placeholder="Last Name"/>
                        </div>
                        <div>
                            <label htmlFor="age"></label>
                            <CardInput
                                onChange={this.props.handleChange}
                                name="age"
                                type="text"
                                value={this.state.updatedUser.age}
                                placeholder="Age"/>
                        </div>
                        <Button type="submit" value="Edit User"/>
                    </form>
                    </CardWrapper>}
                </div>
        )
    }
}

export default UserProfileUpdate