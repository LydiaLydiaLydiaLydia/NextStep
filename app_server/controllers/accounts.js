/* GET login page */
const login = function(req, res){
    res.render('index', { title: 'Log In'});
};
/* GET register page */
const register = function(req, res){
    res.render('index', { title: 'Register'});
};
module.exports = {
    login,
    register
};