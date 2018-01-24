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



module.exports = router
