import React, { Component } from 'react'
import styled from 'styled-components'

const LandingPage = styled.div`
    width: 100vw;
    height: 100vh;
    background: #FF5F6D;
    background: -webkit-linear-gradient(to top, #FFC371, #FF5F6D);
    background: linear-gradient(to top, #FFC371, #FF5F6D);

    div {
        text-align: center;
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: 50%;
        transform: translate(-50%, -50%);
        color: white;
    }
`

class HomePage extends Component {
    render() {
        return(
            <LandingPage>
                <div>
                    Hello From HomePage
                </div>
            </LandingPage>
        )
    }
}

export default HomePage