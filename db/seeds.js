require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("Database successfully connected!")
})
.catch((err) => {
    console.log(err)
})
mongoose.Promise = global.Promise
const User = require('./models/User')
const Interest = require('./models/Interest')
const Events = require('./models/Event')

const coffeeMaking = new Events({
    eventName: 'Make Expresso - Stove Roast Method!',
    location: "125 Ponce City Market",
    date: '1/25/2018',
    price: 25
})

const portrait = new Events({
    eventName: 'Paint Your Partner',
    location: "125 Ponce City Market",
    date: '1/30/2018',
    price: 30
})

const cookingPairs = new Events({
    eventName: 'Cook these amazing dishes',
    location: "125 Ponce City Market",
    date: '2/21/2018',
    price: 15
})

const coffee = new Interest({
    interestName: 'Coffee',
    yearsOfExperience: 5,
    level: 'Expert',
    events: [coffeeMaking]
})

const painting = new Interest({
    interestName: 'Painting',
    yearsOfExperience: 15,
    level: 'Expert',
    events: [portrait]
})

const cooking = new Interest({
    interestName: 'Cooking',
    yearsOfExperience: 2,
    level: 'Novice',
    events: [cookingPairs]
})


const elizabeth = new User({
    userName: 'lizzo_win',
    firstName: 'Elizabeth',
    lastName: 'Nguyen',
    age: 23,
    interests: [coffee, painting, cooking]
})

User.remove({})
    .then(() => elizabeth.save())
    .then(() => console.log('Successful Save'))
    .then(() => mongoose.connection.close())