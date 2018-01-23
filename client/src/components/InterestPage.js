import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class InterestPage extends Component {
    render() {
        const users = this.props.users
        return (
            <div>
                <h1>Interests</h1>
                <Link to="/login">Back to Home</Link>
                <br/>
                <p>{this.props.users_.id}</p>
            </div>
        );
    }
}


export default InterestPage