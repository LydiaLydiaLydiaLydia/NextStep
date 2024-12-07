const express = require('express');
const router = express.Router();

const ctrlAccounts = require('../controllers/accounts');
const ctrlData = require('../controllers/data');

/* Home/Sightings page */
router.get('/', ctrlData.sightings);
/* Accounts pages */
router.route('/register')
      .get(ctrlAccounts.register)
      .post(ctrlAccounts.register);
router.route('/login')
      .get(ctrlAccounts.login)
      .post(ctrlAccounts.login);
      
        

module.exports = router;
