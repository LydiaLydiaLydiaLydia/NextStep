const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production'){
    apiOptions.server = 'https://nextstep-2ngy.onrender.com';
}

const _renderLogin = function(req, res, responseBody){
    res.render('login', { 
        title: 'Logged In',
        subtitle: '',
        message: '',
        link: {
            text: '',
            link: ''
        },
        isLoggedIn: true
    });
}

/* Logging in */
const loggingIn = function(req, res){
    const path = '/api/accounts/login';
    const requestOptions = {
        url : apiOptions.server + path,
        method: 'POST',
        json: {
            "username" : req.body.username,
            "password" : req.body.password
        },
        qs : {}
    };
    request(requestOptions, (err, response, body) => {
        _renderLogin(req, res, body);
    })
};


/* GET login page */
const login = function(req, res){
    res.render('login', { 
        title: 'Log In',
        subtitle: 'Log in to jump into a world of squatch',
        message: 'Not a member?',
        link: {
            text: 'Click here to Register',
            link: '/register/'
        },
        isReg: false
    });
};
/* GET register page */
const register = function(req, res){
    res.render('account', { 
        title: 'Register',
        subtitle: 'Register to jump into a world of squatch',
        message: 'Already a member?',
        link: {
            text: 'Click here to Log In',
            link: '/login/'
        },
        isReg: true
    });
};
module.exports = {
    login,
    register,
    loggingIn
};