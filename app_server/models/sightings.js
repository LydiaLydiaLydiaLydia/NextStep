const mongoose = require('mongoose');
const sightingsSchema = new mongoose.Schema({
    title: String,
    username: String,
    text: String,
    timePosted: Date,
    coords: [Number],
    isVerified: Boolean,
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