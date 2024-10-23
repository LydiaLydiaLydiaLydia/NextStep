const mongoose = require('mongoose');
const sightingsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    text: String,
    timePosted: {
        type: Date,
        'default': Date.now
    },
    coords: {
        type: [Number],
        index: '2dsphere'
    },
    isVerified: {
        type: Boolean,
        'default': false
    },
    profilePic: {
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
mongoose.model('Sighting', sightingsSchema);