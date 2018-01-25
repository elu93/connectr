import React, { Component } from 'react'
import styled from 'styled-components'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import NavBar from './styled_components/NavBar'
import Connectr from '../connectr_img.png'

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
        font-size: 3em;
    }

    a:link {
        text-decoration: none;
        color: white;
    }

    a:visited {
        text-decoration: none;
        color: white;
    }

`

class HomePage extends Component {
    render() {
        return(
            <div>
            <NavBar>
            <header>
                <img src={Connectr}/>
            </header>
            </NavBar>
            <LandingPage>
                <div>
                <Link to='/login'> Connectr </Link>
                </div>
            </LandingPage>
            </div>
        )
    }
}

export default HomePage