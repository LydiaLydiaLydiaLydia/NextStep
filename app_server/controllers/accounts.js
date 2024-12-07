const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production'){
    apiOptions.server = 'https://nextstep-2ngy.onrender.com';
}

/* GET login page */
const _renderLogin = function(req, res, responseBody){
    if(responseBody != null){
        res.render('login', { 
                title: "Logged In!",
                subtitle: '',
                message: responseBody.message,
                link: {
                    text: '',
                    link: ''
                },
                isLoggedIn: true
            });
    }else{
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
    }
    
};

const login = function(req, res){
    if(req.method === 'GET'){
        responseBody = null;
        _renderLogin(req, res, responseBody);
    }else if(req.method == 'POST'){
        const path = '/api/accounts/login';
        const requestOptions = {
            url: apiOptions.server + path,
            method: 'POST',
            json: {
                "username" : req.body.username,
                "password" : req.body.password
            },
            qs : {}
        };
        request(requestOptions, (err, response, responseBody) => {
            if (err) { 
                res.render('error', {
                    title: 'Something\'s gone wrong',
                    err: err
                });
                console.log(err); 
    
                } else if (response.statusCode === 200) { 
                    _renderLogin(req, res, responseBody); 
    
                } else {
                    res.render('error', {
                        title: 'Something\'s gone wrong',
                        err: err
                    }); 
                    console.log(response.statusCode); 
                }
        });
    }       
};

/* GET register page */
const _renderRegister = function(req, res, responseBody){
    if(responseBody != null){
        res.render('register', { 
            title: 'Registered and Logged In',
            subtitle: '',
            message: responseBody.message,
            link: {
                text: '',
                link: ''
            },
            isLoggedIn: true
        });
    }else{
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
    }
};

const register = function(req, res){
    if(req.method === 'GET'){
        responseBody = null;
        _renderRegister(req, res, responseBody);
    }else if(req.method == 'POST'){
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
        request(requestOptions, (err, response, responseBody) => {
            if (err) { 
                res.render('error', {
                    title: 'Something\'s gone wrong',
                    err: err
                });
                console.log(err); 
            } else if (response.statusCode === 200) { 
                _renderRegister(req, res, responseBody); 

            } else {
                res.render('error', {
                    title: 'Something\'s gone wrong',
                    err: err
                }); 
                console.log(response.statusCode); 
            }
         });
    }     
};

module.exports = {
    login,
    register
};