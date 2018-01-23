const express = require('express')
const Interest = require('../db/models/Interest')
const User = require('../db/models/User')
const Event = require('../db/models/Event')
const router = express.Router({ mergeParams: true})

router.get('/:eventId', (req, res) => {
    console.log(req.params.interestId)
    console.log(req.params.userId)
    console.log(req.params.eventId)
    User.findById(req.params.userId)
        .then((user) => {
            const interest = user.interests.id(req.params.interestId)
            .then((interests) => {
                const event = interests.events.id(req.params.eventId)
                res.json(event)
            })
        }).catch((error) => 
            console.log(error))
})

module.exports = router
