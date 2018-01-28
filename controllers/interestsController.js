const express = require('express')
const Interest = require('../db/models/Interest')
const User = require('../db/models/User')
const router = express.Router({ mergeParams: true})

router.get('/:interestId', (req, res) => {
    console.log(req.params.interestId)
    console.log(req.params.userId)
    User.findById(req.params.userId)
        .then((user) => {
            const interest = user.interests.id(req.params.interestId)
            res.json(interest)
        }).catch((error) => 
            console.log(error))
})

router.post('/', (req, res) => {
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


module.exports = router
