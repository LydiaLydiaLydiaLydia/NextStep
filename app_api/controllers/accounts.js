const mongoose = require('mongoose');
const Sighting = mongoose.model('Sighting');
const Account = mongoose.model('Account');
const passport = require('passport');

const accountsCreate = function (req, res) {
    Account
        .register(new Account({username: req.body.username }), req.body.password, (err, account) => {
            if (err) {
                return res.render('register', {error : err.message });
            }
            passport.authenticate('local')(req, res, () => {
                req.session.save((err) => {
                    if (err) {
                        return next(err);
                    }
                    res.redirect('/');
                });
            });
        });
};  

const accountsLogin = function(req, res) {
    if (req.params && req.body.username && req.body.password) {
        passport.authenticate('local', { failureRedirect: '/login', failureFlash: true}), (req, res, next) => {
            req.session.save((err) => {
                if (err) {
                    return next(err);
                }
                res.redirect('/');
            });
        };
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