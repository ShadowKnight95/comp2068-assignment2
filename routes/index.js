/* Name: index.js */
/* Author: Zac Force */
/* Website Name: Business Directory */
/* File Description: main js page in routes that gives all of the pages their variable info */

var express = require('express');
var router = express.Router();

// link to the Account model
var Account = require('../models/account');
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Business Directory',
    message: 'This is my business directory. It shows all of the available businesses registered on this website. You may view the registered businesses with the business tab or you may create an account and add your own business to the site today!',
    user: req.user
  });
});

// reference the business model
var Business = require('../models/business');

// GET handler for /view-businesses
router.get('/view-businesses', function(req, res, next) {

    // use Business model to run a query
    Business.find(function(err, businesses) {
        if (err) {
            console.log(err);
            res.render('error');
        }
        else {
            // load the view-businesses view
            res.render('view-businesses', {
                title: 'Businesses',
                businesses: businesses,
                user: req.user
            });
        }
    });
});

/* GET register page */
router.get('/register', function(req, res, next) {
  res.render('register', {
    title: 'Register',
    user: req.user
  });
});

/* POST register page */
router.post('/register', function(req, res, next) {
  // use passport and the Account model to save the new user
  Account.register(new Account( { username: req.body.username }),
      req.body.password, function(err, account) {
        if (err) {
          console.log(err);
          res.render('error');
        }
        else {
          res.redirect('/login');
        }
      });
});

/* GET login page */
router.get('/login', function(req, res, next) {

  // get session messages if there are any
  var messages = req.session.messages || [];

// clear the messages out of the session
 req.session.messages = null;
 
  res.render('login', {
    title: 'Login',
    messages: messages,
    user: req.user
  });
});

/* POST login page */
router.post('/login', passport.authenticate('local', {
  successRedirect: '/businesses',
  failureRedirect: '/login',
  failureMessage: 'Invalid Login'  // stored in session.messages
}));

/* GET logout */
router.get('/logout', function(req, res, next) {
  req.logout();
  res.redirect('/login');
});

// get /github
router.get('/github', passport.authenticate('github'),
function(req, res, next){
});

//get /github/callback
router.get('/github/callback', passport.authenticate('github', {
  failureRedirect: '/login',
  failureMessage: 'Invalid Login'
}), function(req, res, next){
  //show the businesses page
  res.redirect('/businesses');
});

// get /twitter
router.get('/twitter', passport.authenticate('twitter'),
function(req, res, next){
});

//get /twitter/callback
router.get('/twitter/callback', passport.authenticate('twitter', {
  failureRedirect: '/login',
  failureMessage: 'Invalid Login'
}), function(req, res, next){
  //show the businesses page
  res.redirect('/businesses');
});

module.exports = router;
