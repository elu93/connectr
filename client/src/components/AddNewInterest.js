import React, { Component } from 'react'
import styled from 'styled-components'
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

class AddNewInterest extends Component {

    state = {
        newInterest: {}
    }

    render() {
        return (
            <div>
                <CardWrapper>
                <h1>New User</h1>
                <br/>
                <form onSubmit={this.props.handleInterestAdd}>
                    <div>
                        <label htmlFor="interestName">Name of Interest</label>
                        <CardInput
                            onChange={this.props.handleInterestChange}
                            name="interestName"
                            type="text"
                            value={this.state.interestName}/>
                    </div>
                    <div>
                        <label htmlFor="yearsOfExperience">Experience: Years</label>
                        <CardInput
                            onChange={this.props.handleInterestChange}
                            name="yearsOfExperience"
                            type="number"
                            value={this.state.yearsOfExperience}
                            />
                    </div>
                    <div>
                        <label htmlFor="level">Mastery:</label>
                        <CardInput
                            onChange={this.props.handleInterestChange}
                            name="level"
                            type="text"
                            value={this.state.level}/>
                    </div>
                    <div>
                        <label htmlFor="interestPhoto">Photo of Interest</label>
                        <CardInput
                            onChange={this.props.handleInterestChange}
                            name="interestPhoto"
                            type="text"
                            value={this.state.interestPhoto}/>
                    </div>
                    <br/>
                    <CardButton type="submit">Submit</CardButton>
                </form>
            </CardWrapper>
            </div>
        )
    }
}

export default AddNewInterest