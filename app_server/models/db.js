const mongoose = require('mongoose');
const dbURI = "mongodb+srv://dbUser:dbUser123@cluster0.0aecw.mongodb.net/NextStep?retryWrites=true&w=majority&appName=Cluster0"

try{
    mongoose.connect(
        dbURI,
        {useNewUrlParser: true, useUnifiedTopology: true}) .then(
            ( => {console.log("Mongoose is connected")},
        err => {console.log(err)}
    );
        )
    )
}