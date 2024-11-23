const mongoose = require('mongoose');
const Sighting = mongoose.model('Sighting');
const ObjectId = mongoose.Types.ObjectId;

const sightingsList = function (req, res){
    Sighting
        .find()
        .then((sightings, err) => {
            if(!sightings) {
                res
                    .status(404)
                    .json({
                        "message": "no sightings available"
                    });
                    return;
            }else if(err){
                res
                    .status(404)
                    .json(err);
                return;
            }
            res
            .status(200)
            .json(sightings);
        })
};

const sightingsFindOne = function (req, res){
    if (req.params && req.params.id) {
        sighting_id = new ObjectId(req.params.id);
        Sighting
            .findById(sighting_id)
            .then((sighting, err) => {
                if(!sighting) {
                    res
                        .status(404)
                        .json({
                            "message" : "sightingid not found"
                        });
                    return;
                } else if (err) {
                    res
                        .status(404)
                        .json(err);
                    return;
                }
                res
                    .status(200)
                    .json(sighting);
            });
    } else {
        res
            .status(404)
            .json({
                "message" : "No sightingid in request"
            });
    }
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