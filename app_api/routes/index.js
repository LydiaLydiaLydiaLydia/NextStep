const express = require('express');
const router = express.Router();
const ctrlAccounts = require('../controllers/accounts');
const ctrlSightings = require('../controllers/data');
const passport = require('passport')

router
    .route('/sightings')
    .get(ctrlSightings.sightingsList);
router.get('/accounts/register', ctrlAccounts.accountsCreate);
router.post('/accounts/register', (req, res, next) => {
        Account.register(new Account({ username : req.body.username,
            email: req.body.email
         }), req.body.password, (err, account) => {
            if (err) {
              return res.render('register', { error : err.message });
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
    });
router
    .route('/accounts/login')
    .post(ctrlAccounts.accountsLogin);

//router
//    .route('/sightings/:filter')
//    .get(ctrlSightings.sightingsListByFilter);
//router
//    .route('/sightings/:id')
//    .get(ctrlSightings.sightingsFindOne);

module.exports = router;