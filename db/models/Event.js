const mongoose = require('mongoose')
const Schema = require('../schema')
const Events = mongoose.model('Event', Schema.EventSchema)

module.exports = Events