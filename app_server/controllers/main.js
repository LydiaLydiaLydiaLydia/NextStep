/* GET home page */
const index = function(req, res){
    res.render('index', { title: 'Next Step'});
};
module.exports = {
    index
};