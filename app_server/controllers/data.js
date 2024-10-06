/* GET home page */
const sightings = function(req, res){
    res.render('index', { title: 'Next Step'});
};
module.exports = {
    sightings
};