const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production'){
    apiOptions.server = 'https://nextstep-2ngy.onrender.com';
}

const _renderHomepage = function(req, res, responseBody){
    res.render('index', { 
        title: 'Sightings',
        pageHeader:{
            title: 'The Bigfoot Tracking App',
            strapline: 'Figure out his Next Step'
        },
        sightings: responseBody,
        user: req.user
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

        if (err) { 
            res.render('error', {
                title: 'Something\'s gone wrong'
            });
            console.log(err); 

            } else if (response.statusCode === 200) { 
                _renderHomepage(req, res, body); 

            } else {
                res.render('error', {
                    title: 'Something\'s gone wrong'
                }); 
                console.log(response.statusCode); 
            }
    })
};
module.exports = {
    sightings
};