const mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
const accountSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
const sightingsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    postedBy: {
        type: accountSchema,
        required: true
    },
    text: String,
    timePosted: {
        type: Date,
        'default': Date.now,
        required: true
    },
    coords: {
        type: [Number],
        index: '2dsphere'
    },
    verifiedBy: [accountSchema],
    mainPic: {
        data: Buffer,
        contentType: String
    },
    bigPics: [
        {
            data: Buffer,
            contentType: String
        }
    ]
});

accountSchema.plugin(passportLocalMongoose);

var Sighting = mongoose.model('Sighting', sightingsSchema);
var Account = mongoose.model('Account', accountSchema);

module.exports = {
    Sighting,
    Account
};