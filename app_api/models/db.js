const mongoose = require('mongoose');
require('./sightings');
const username= process.env.DB_USERNAME;
const password= process.env.DB_PASSWORD;
//const dbURI = "mongodb+srv://" + username + ":" + password + "@cluster0.0aecw.mongodb.net/NextStep?retryWrites=true&w=majority&appName=Cluster0"
const dbURI = "mongodb+srv://dbUser:" + password + "@cluster0.0aecw.mongodb.net/NextStep?retryWrites=true&w=majority&appName=Cluster0";
try{
    mongoose.connect(
        dbURI,
        {useNewUrlParser: true, useUnifiedTopology: true}) .then(
            () => {console.log("Mongoose is connected")},
        err => {console.log(err)}
    );
}
catch (e) {
    console.log("could not connect");
}
