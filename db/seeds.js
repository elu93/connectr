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
    price: 25,
    eventImage: 'https://source.unsplash.com/dPzqzWI6AO8/300x300'
})

const portrait = new Events({
    eventName: 'Paint Your Partner',
    location: "125 Ponce City Market",
    date: '1/30/2018',
    price: 30,
    eventImage: 'https://source.unsplash.com/X6CZGpJBi8U/300x300'
})

const cookingPairs = new Events({
    eventName: 'Cook these amazing dishes',
    location: "125 Ponce City Market",
    date: '2/21/2018',
    price: 15,
    eventImage: 'https://source.unsplash.com/-F_5g8EEHYE/300x300'
})

const coffee = new Interest({
    interestName: 'Coffee',
    yearsOfExperience: 5,
    level: 'Expert',
    interestPhoto: 'https://source.unsplash.com/6VhPY27jdps/300x300',
    events: [coffeeMaking]
})

const painting = new Interest({
    interestName: 'Painting',
    yearsOfExperience: 15,
    level: 'Expert',
    interestPhoto: 'https://source.unsplash.com/Sj0nhVIb4eY/300x300',
    events: [portrait]
})

const cooking = new Interest({
    interestName: 'Cooking',
    yearsOfExperience: 2,
    level: 'Novice',
    interestPhoto: 'https://source.unsplash.com/uQs1802D0CQ/300x300',
    events: [cookingPairs]
})


const elizabeth = new User({
    userName: 'jane_doe',
    firstName: 'Jane',
    lastName: 'Doe',
    age: 25,
    photoUrl: 'https://source.unsplash.com/Q_MYbs7KdcU/300x300',
    biography: 'I am 25 years old and I love 3 things in this world: coffee, painting, and cooking. I love meeting new people and teaching others. Feel free to reach out to me!',
    interests: [coffee, painting, cooking]
})

const eric = new User({
    userName: 'john_doe',
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    photoUrl: 'https://source.unsplash.com/Pf5Pj7A5ddA/300x300',
    biography: 'I am 25 years old and I love 3 things in this world: coffee, painting, and cooking. I love meeting new people and teaching others. Feel free to reach out to me!',
    interests: [coffee, painting, cooking]
})

const winnie = new User({
    userName: 'christy_dawson',
    firstName: 'Christy',
    lastName: 'Dawson',
    age: 25,
    photoUrl: 'https://source.unsplash.com/ilpMdrM5L3E/300x300',
    biography: 'I am 25 years old and I love 3 things in this world: coffee, painting, and cooking. I love meeting new people and teaching others. Feel free to reach out to me!',
    interests: [coffee, painting, cooking]
})

const phil = new User({
    userName: 'bob_ablaw',
    firstName: 'Bob',
    lastName: 'Law',
    age: 25,
    photoUrl: 'https://source.unsplash.com/_VsGVlCzEtU/300x300',
    biography: 'I am 25 years old and I love 3 things in this world: coffee, painting, and cooking. I love meeting new people and teaching others. Feel free to reach out to me!',
    interests: [coffee, painting, cooking]
})

User.remove({})
    .then(() => elizabeth.save())
    .then(() => eric.save())
    .then(() => winnie.save())
    .then(() => phil.save())
    .then(() => console.log('Successful Save'))
    .then(() => mongoose.connection.close())