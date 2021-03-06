import React, { Component } from 'react'
import styled from 'styled-components'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import NavBar from './styled_components/NavBar'
import Connectr from '../connectr_img.png'
import RegButton from './styled_components/RegButton'

const LandingPage = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url('https://source.unsplash.com/3BK_DyRVf90');
    opacity: 0.9;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top;
    background-attachment: fixed;
    /* background: #FF5F6D;
    background: -webkit-linear-gradient(to top, #FFC371, #FF5F6D);
    background: linear-gradient(to top, #FFC371, #FF5F6D); */

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
                <Link to="/"><img src={Connectr}/></Link>
            </header>
            </NavBar>
            <LandingPage>
                <div>
                <Link to='/login'>Connectr </Link>
                </div>
            </LandingPage>
            <NavBar>
                    <p>Made by Eric Lu @ 2018</p>
                </NavBar>
            </div>
        )
    }
}

export default HomePage