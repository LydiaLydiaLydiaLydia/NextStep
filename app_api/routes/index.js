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
    .route('/accounts')
    .post(ctrlAccounts.accountsCreate);

module.exports = router;