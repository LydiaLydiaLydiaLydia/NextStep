const mongoose = require('mongoose');
const Sighting = mongoose.model('Sighting');

const accountsCreate = function (req, res) {
    res
        .status(200)
        .json({"status" : "success"});
};

module.exports = {
    accountsCreate
};