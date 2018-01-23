const express = require('express')
const User = require('../db/models/User')
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
            console.log(user)
        }).catch((error) => 
            console.log(error))
})

module.exports = router
