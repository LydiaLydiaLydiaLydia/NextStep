const mongoose = require('mongoose');
const Sighting = mongoose.model('Sighting');

const sightingsListChronological = function (req, res){
    res
        .status(200)
        .json({"status" : "success"});
};
const sightingsListByFilter = function (req, res){
    res
        .status(200)
        .json({"status" : "success"});
};

const sightingsReadOne = function (req, res){
Sighting
    .findById(req.params.sightingid)
    .then((sighting,err) => {
        res
            .status(200)
            .json(sighting);
    });
};

module.exports = {
    sightingsListChronological,
    sightingsListByFilter,
    sightingsReadOne
};