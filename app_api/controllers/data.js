const mongoose = require('mongoose');
const Sighting = mongoose.model('Sighting');

const sightingsList = function (req, res){

    res
        .status(200)
        .json({"status" : "success"});
};

const sightingsFindOne = function (req, res){
    console.log(req.params);

    Sighting
        .findById(req.params.id)
        .then((sighting,err) => {
            res
                .status(200)
                .json(sighting);
    });
};
const sightingsListByFilter = function (req, res){
    res
        .status(200)
        .json({"status" : "success"});
};


module.exports = {
    sightingsList,
    sightingsListByFilter,
    sightingsFindOne
};