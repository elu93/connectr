import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import axios from 'axios'
import InterestPage from './InterestPage'
import styled from 'styled-components'
import NavBar from './styled_components/NavBar'
import Connectr from '../connectr_img.png'
import AddNewUser from './AddNewUser'
import RegButton from './styled_components/RegButton'
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

const RedButton = RegButton.extend`
    background-color: #ff0000;
    width: 30%;
    color: white;
    border: 1px solid black;
`
const AddUserButton = CardButton.extend`
    margin: 10%;
    background-color: #5bf759;
    width: 30%;
`

const QuoteButton = AddUserButton.extend`
    background-color: #fff600;
`

const UserShowPage = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    margin: 0 25vw;
    width: 50vw;
    justify-content: center;

    h1 {
        margin: 0;
        vertical-align: middle;
    }

`

const ItalicQuote = styled.p`
    font-style: italic;
`

const RedTrash = styled.i`
    color: red;
`

const DisplayFlex = styled.p`
    display: flex;
    flex-wrap: wrap;

    @media only screen and (max-width: 1439px) and (min-width: 730px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 25vw;
        width: 50vw;
    }
`

const HeaderCenter = styled.h1`
    text-align: center;
`

const ElementPadding = styled.div`
    padding: 30px;
`

class UsersPage extends Component {

    state = {
        users: [],
        newUser: {},
        quote: {},
        showNewPage: false
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

            axios.get('https://favqs.com/api/qotd')
            .then(res => {
                const quote = res.data.quote
                this.setState({quote})
            })
            .catch((error) => {
                console.log('New error', error)
            })
    }

    createUser = async() => {
        const response = await axios.post(`/api/users`, this.state.newUser)
        const newUser = response.data
        const newUsers = [...this.state.users]
        newUsers.unshift(newUser)
        this.setState({users: newUsers, showNewPage: false})
    }

    getQuoteOfDay = async() => {
        const response = await axios.get('https://favqs.com/api/qotd')
        const newQuote = response.data.quote
        const quote = {...this.state.quote}
        this.setState({quote: newQuote})
    }

    deleteUser = async(user) => {
        try {
            await axios.delete(`/api/users/${user._id}`)
            const indexToDelete = this
                .state
                .users
                .indexOf(user)
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

    showNewFormCompoent = () => {
        this.setState({showNewPage: true})
    }

    render() {
        console.log(this.state.quote)
        return (
            <div>
                <NavBar>
                    <header>
                        <Link to="/"><img src={Connectr}/></Link>
                    </header>
                </NavBar>
                {this.state.showNewPage ? <AddNewUser 
                    createUser={this.createUser}
                    handleSignUp={this.handleSignUp}
                    handleChange={this.handleChange}
                    /> :
                    <div>
                        <UserShowPage>
                        <AddUserButton onClick={this.showNewFormCompoent}>Add New User</AddUserButton>
                        <QuoteButton onClick={this.getQuoteOfDay}>Get New Quote</QuoteButton>
                        <div>
                        <p>{this.state.quote.body}</p>
                        <ItalicQuote> --{this.state.quote.author}</ItalicQuote>
                        </div>
                        <DisplayFlex>
                            {this
                                .state
                                .users
                                .map((user, index) => {
                                    return (
                                        <ElementPadding key={user._id}>
                                            <HeaderCenter>{user.userName} <RedTrash type="submit" onClick={() => this.deleteUser(user)} className="fa fa-trash" aria-hidden="true"></RedTrash></HeaderCenter>
                                            <Link to={`/user/${user._id}`}><img src={user.photoUrl} alt={user.userName}/></Link>
                                        </ElementPadding>
                                    )
                                })}
                        </DisplayFlex>
                        </UserShowPage>
                    </div> }
                    <NavBar>
                        <p>Made by Eric Lu @ 2018</p>
                    </NavBar>
            </div>
        )
    }
}

export default UsersPage
