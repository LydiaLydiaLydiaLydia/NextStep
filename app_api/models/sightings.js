const mongoose = require('mongoose');
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
    },
    profilePic: {
        data: Buffer,
        contentType: String
    }
})
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
mongoose.model('Sighting', sightingsSchema);
mongoose.model('Account', accountSchema);