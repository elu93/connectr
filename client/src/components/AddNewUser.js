import React, { Component } from 'react'
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
                                    <CardInput
                                        onChange={this.props.handleChange}
                                        name="userName"
                                        type="text"
                                        value={this.state.userName}
                                        placeholder="Username"/>
                                </div>
                                <div>
                                    <CardInput
                                        onChange={this.props.handleChange}
                                        name="firstName"
                                        type="text"
                                        value={this.state.firstName}
                                        placeholder="First Name"/>
                                </div>
                                <div>
                                    <CardInput
                                        onChange={this.props.handleChange}
                                        name="lastName"
                                        type="text"
                                        value={this.state.lastName}
                                        placeholder="Last Name"/>
                                </div>
                                <div>
                                    <CardInput
                                        onChange={this.props.handleChange}
                                        name="age"
                                        type="text"
                                        value={this.state.age}
                                        placeholder="Age"/>
                                </div>
                                <div>
                                    <CardInput
                                        onChange={this.props.handleChange}
                                        name="photoUrl"
                                        type="text"
                                        value={this.state.photoUrl}
                                        placeholder="Photo Avatar"/>
                                </div>
                                <div>
                                    <CardInput
                                        onChange={this.props.handleChange}
                                        name="biography"
                                        type="text"
                                        value={this.state.biography}
                                        placeholder="Biography"/>
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