/* GET login page */
const login = function(req, res){
    res.render('login', { title: 'Log In'});
};
/* GET register page */
const register = function(req, res){
    res.render('register', { title: 'Register'});
};
module.exports = {
    login,
    register
};