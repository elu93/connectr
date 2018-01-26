const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EventSchema = new Schema({
    eventName: {
        type: String,
        required: true,
        default: 'Some Event'
    },
    location: {
        type: String,
        required: false,
        default: 'TBD'
    },
    date: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: false,
        default: 0
    },
    eventImage: {
        type: String,
        required: false
    }
})

const InterestSchema = new Schema({
    interestName: {
        type: String,
        required: true
    },
    yearsOfExperience: {
        type: Number,
        required: false,
        default: 0
    },
    level: {
        type: String,
        required: false,
        default: 'Novice'
    },
    interestPhoto: {
        type: String,
        required: true
    },
    events: [EventSchema]
}, {
    timestamps: {}
})

const UserSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: false
    },
    photoUrl: {
        type: String,
        default: 'https://picsum.photos/200/300/?random'
    },
    biography: {
        type: String,
        required: false
    },
    interests: [InterestSchema]
}, {
    timestamps: {}
})

module.exports = {
    UserSchema,
    InterestSchema,
    EventSchema
}