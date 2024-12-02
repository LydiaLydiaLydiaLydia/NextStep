const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production'){
    apiOptions.server = 'https://nextstep-2ngy.onrender.com';
}

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
        isLoggedIn: false
    });
};

const _renderLogin = function(req, res, responseBody){
    res.render('login', { 
        title: 'Logged In',
        subtitle: responseBody.status,
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

/* GET register page */
const register = function(req, res){
    res.render('register', { 
        title: 'Register',
        subtitle: 'Register to jump into a world of squatch',
        message: 'Already a member?',
        link: {
            text: 'Click here to Log In',
            link: '/login/'
        },
        isLoggedIn: false
    });
};

const _renderRegister = function(req, res, responseBody){
    res.render('register', { 
        title: 'Logged In',
        subtitle: '',
        message: '',
        link: {
            text: '',
            link: ''
        },
        isLoggedIn: true
    });
};

const registering = function(req, res){
    const path = '/api/accounts/register';
    const requestOptions = {
        url : apiOptions.server + path,
        method: 'POST',
        json: {
            "username" : req.body.username,
            "email" : req.body.email,
            "password" : req.body.password
        },
        qs : {}
    };
    request(requestOptions, (err, response, body) => {
        _renderRegister(req, res, body);
    })
};

module.exports = {
    login,
    register,
    loggingIn,
    registering
};