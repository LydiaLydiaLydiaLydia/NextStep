const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production'){
    apiOptions.server = 'https://nextstep-2ngy.onrender.com';
}

const _renderHomepage = function(req, res, responseBody){
    res.render('sightings', {
        user : req.user, 
        title: 'Sightings',
        pageHeader:{
            title: 'The Bigfoot Tracking App',
            strapline: 'Figure out his Next Step'
        },
        sightings: responseBody
    });
}

/* GET home page */
const sightings = function(req, res){
    const path = '/api/sightings';
    const requestOptions = {
        url : apiOptions.server + path,
        method: 'GET',
        json: {},
        qs : {}
    };
    request(requestOptions, (err, response, body) => {
        _renderHomepage(req, res, body);
    })
};
module.exports = {
    sightings
};