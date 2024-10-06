const express = require('express');
const router = express.Router();

const ctrlAccounts = require('../controllers/accounts');
const ctrlData = require('../controllers/data');

/* Home/Sightings page */
router.get('/', ctrlData.sightings);
/* Accounts pages */
router.get('/register', ctrlAccounts.register);
router.get('/login', ctrlAccounts.login);

module.exports = router;
