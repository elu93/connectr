const express = require('express')
const User = require('../db/models/User')
const Interest = require('../db/models/Interest')
const router = express.Router()

router.get('/', (req, res) => {
    User
        .find()
        .then(users => {
            res.json(users)
        })
        .catch((err) => console.log(err))
})

router.post('/', (req, res) => {

    console.log(req.body)
    const newUser = new User(req.body)
    newUser
        .save()
        .then((user) => {
            res.json(user)
        })
        .catch((error) => console.log(error))
})

router.get('/:userId', (req, res) => {
    User.findById(req.params.userId)
        .then((user) => {
            res.json(user)
        }).catch((error) => 
            console.log(error))
})

router.post('/:userId', (req, res) => {
    const userId = req.params.userId
    const newInterest = req.body
    console.log(req.body)
    User.findById(userId)
    .then((user) => {
        user.interests.push(newInterest)
        return user.save()
    })
    .then((interest) => {
        res.json(interest)
    })
    .catch((error) => console.log(error))
})

router.delete('/:userId', async(req, res) => {
    try {
        await User.findByIdAndRemove(req.params.userId) // Delete the idea from the database
        res.sendStatus(200) // Send back a status of 200 to tell the client that the delete was successful
    } catch (error) {
        console.log(error)
        res.sendStatus(500) // If there is any error, tell the client something went wrong on the server
    }
})

router.patch('/:userId/', async(req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, {new: true})
        console.log(updatedUser)
        res.json(updatedUser)
    } catch (error) {
        console.log(error)
        res.sendStatus(500) // If there is any error, tell the client something went wrong on the server
    }
})

module.exports = router
