const mongoose = require('mongoose');
const Sighting = mongoose.model('Sighting');
const Account = mongoose.model('Account');

const accountsCreate = function (req, res) {
    if (req.params && req.body.username && req.body.password){
        Account
            .create({
                "username": req.body.username,
                "email": req.body.email,
                "password": req.body.password
            })
            .then ((account, err) => {
                if(err){
                    res
                        .status(400)
                        .json({
                            "message" : err,
                            "loggedIn" : 0
                });
                } else {
                    res
                        .status(200)
                        .json({
                            "message" : "You are registered and logged in",
                            "loggedIn" : 1
                        });
                }
            });
    }else {
        res
            .status(404)
            .json({
                "message" : "No username and/or password and/or email in request",
                "loggedIn" : 0
            });
    }
};  

const accountsLogin = function(req, res) {
    if (req.params && req.body.username && req.body.password) {
        Account
            .findOne({"username" : req.body.username})
            .then((account, err) => {
                if(!account) {
                    res
                        .status(404)
                        .json({
                            "message" : "Account not found",
                            "loggedIn": 0
                        });
                    return;
                } else if (err) {
                    res
                        .status(404)
                        .json({
                            "message" : err,
                            "loggedIn" : 0
                        });
                    return;
                }
                res
                    .status(200)
                    .json({
                        "message": "You are now logged in",
                        "loggedIn" : 1
                    });
            });
    } else {
        res
            .status(404)
            .json({
                "message" : "No username and/or password in request",
                "loggedIn" : 0
            });
    }
}
module.exports = {
    accountsCreate,
    accountsLogin
};