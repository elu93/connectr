import React, {Component} from 'react'
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
        updatedUser: {}
    }

    updateUserAgain = async () => {
        this.props.handleSignUp()
    }

    render() {
        return (
            <div>
                    <CardWrapper>
                    <h1>Update User</h1>
                    <form onSubmit={this.props.handleSignUp}>
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
                        <div>
                            <label htmlFor="photoImage"></label>
                            <CardInput
                                onChange={this.props.handleChange}
                                name="photoImage"
                                type="text"
                                value={this.state.updatedUser.photoImage}
                                placeholder="Photo Avatar"/>
                        </div>
                        <div>
                            <label htmlFor="biography"></label>
                            <CardInput
                                onChange={this.props.handleChange}
                                name="biography"
                                type="text"
                                value={this.state.updatedUser.biography}
                                placeholder="Biography"/>
                        </div>
                        <Button type="submit" value="Edit User"/>
                    </form>
                    </CardWrapper>
                </div>
        )
    }
}

export default UserProfileUpdate