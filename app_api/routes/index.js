const express = require('express');
const router = express.Router();
const ctrlAccounts = require('../controllers/accounts');
const ctrlSightings = require('../controllers/data');

//router
//    .route('/sightings/:filter')
//    .get(ctrlSightings.sightingsListByFilter);

router
    .route('/sightings')
    .get(ctrlSightings.sightingsList);

router
    .route('/sightings/:id')
    .get(ctrlSightings.sightingsFindOne);

router
    .route('/accounts/register')
    .post(ctrlAccounts.accountsCreate);
router
    .route('/accounts/login')
    .post(ctrlAccounts.accountsLogin);
module.exports = router;