const express = require('express');
const router = express.Router();

const ctrlAccounts = require('../controllers/accounts');
const ctrlData = require('../controllers/data');

var passport = require('passport');
var Account = require('../../app_api/models/sightings').Account;

/* Home/Sightings page */
router.get('/', ctrlData.sightings);
/* Accounts pages */
router.route('/register')
      .get(ctrlAccounts.register)
router.post('/register',function(req, res) {
            Account.register(new Account({ username : req.body.username, email : req.body.email }), req.body.password, function(err, account) {
                if (err) {
                    return res.render('register', { account : account, title: "Failed to Register!",
                        subtitle: '',
                        message: "no good",
                        link: {
                            text: '',
                            link: ''
                        },
                        isLoggedIn: false });
                }
        
                passport.authenticate('local')(req, res, function () {
                    res.redirect('/');
                });
            });
        });
router.route('/login')
      .get(ctrlAccounts.login)
router.post('/login', passport.authenticate('local'), function(req, res) {
            res.redirect('/');
        });

router.get('/ping', function(req, res){
      res.status(200).send("pong!");
});

module.exports = router;
