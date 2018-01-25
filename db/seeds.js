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
    photoUrl: 'https://picsum.photos/300/300/?random',
    interests: [coffee, painting, cooking]
})

const eric = new User({
    userName: 'e.lu',
    firstName: 'Eric',
    lastName: 'Lu',
    age: 24,
    photoUrl: 'https://picsum.photos/300/300/?random',
    interests: [coffee, painting, cooking]
})

const winnie = new User({
    userName: 'winnie_lawl',
    firstName: 'Winnie',
    lastName: 'Law',
    age: 23,
    photoUrl: 'https://picsum.photos/300/300/?random',
    interests: [coffee, painting, cooking]
})

const phil = new User({
    userName: 'p_89',
    firstName: 'Phil',
    lastName: 'Lu',
    age: 28,
    photoUrl: 'https://picsum.photos/300/300/?random',
    interests: [coffee, painting, cooking]
})

User.remove({})
    .then(() => elizabeth.save())
    .then(() => eric.save())
    .then(() => winnie.save())
    .then(() => phil.save())
    .then(() => console.log('Successful Save'))
    .then(() => mongoose.connection.close())