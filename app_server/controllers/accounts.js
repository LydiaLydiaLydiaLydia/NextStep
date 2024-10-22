/* GET login page */
const login = function(req, res){
    res.render('login', { 
        title: 'Log In',
        subtitle: 'Log in to jump into a world of squatch',
        message: 'Not a member?',
        link: {
            text: 'Click here to Register',
            link: '/register/'
        }});
};
/* GET register page */
const register = function(req, res){
    res.render('register', { 
        title: 'Register',
        subtitle: 'Register to jump into a world of squatch',
        message: 'Already a member?',
        link: {
            text: 'Click here to Log In',
            link: '/login/'
        }});
};
module.exports = {
    login,
    register
};