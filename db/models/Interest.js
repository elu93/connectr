const mongoose = require('mongoose')
const Schema = require('../schema')
const Interest = mongoose.model('Interest', Schema.InterestSchema)

module.exports = Interest