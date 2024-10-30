const express = require('express');
const router = express.Router();
const ctrlAccounts = require('../controllers/accounts');
const ctrlSightings = require('../controllers/data');

router
    .route('/sightings')
    .get(ctrlSightings.sightingsListChronological);

//router
//    .route('/sightings/:filter')
//    .get(ctrlSightings.sightingsListByFilter);
router
    .route('sightings/:id')
    .get(ctrlSightings.sightingsReadOne);
    
router
    .route('/accounts')
    .post(ctrlAccounts.accountsCreate);

module.exports = router;