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
                        .json(err);
                } else {
                    res
                        .status(200)
                        .json(account);
                }
            });
    }else {
        res
            .status(404)
            .json({
                "message" : "No username and/or password and/or email in request"
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
                            "message" : "Account not found"
                        });
                    return;
                } else if (err) {
                    res
                        .status(404)
                        .json(err);
                    return;
                }
                res
                    .status(200)
                    .json(account);
            });
    } else {
        res
            .status(404)
            .json({
                "message" : "No username and/or password in request"
            });
    }
}
module.exports = {
    accountsCreate,
    accountsLogin
};