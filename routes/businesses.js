/* Name: businesses.js */
/* Author: Zac Force */
/* Website Name: Business Directory */
/* File Description: route file for businesses page and the creation, deletion and editing of it in the db */

var express = require('express');
var router = express.Router();

// reference the business model
var Business = require('../models/business');

// auth check
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    }
    else {
        res.redirect('/login');
    }
}

// GET handler for /businesses
router.get('/', isLoggedIn, function(req, res, next) {

    // use Business model to run a query
    Business.find(function(err, businesses) {
        if (err) {
            console.log(err);
            res.render('error');
        }
        else {
            // load the businesses view
            res.render('businesses', {
                title: 'Businesses',
                businesses: businesses,
                user: req.user
            });
        }
    });
});

/* GET /businesses/add - display empty Business form */
router.get('/add', isLoggedIn, function(req, res, next) {

    // load the blank business form
    res.render('add-business', {
        title: 'Add a New Business',
        user: req.user
    });
});

/* POST /businesses/add - process form submission */
router.post('/add', isLoggedIn, function(req, res, next) {
    // use the Business model and call the Mongoose create function
    Business.create( {
        name: req.body.name,
        owner: req.body.owner,
        year: req.body.year,
        bType: req.body.bType,
        wifi: req.body.wifi
    }, function(err, Business) {
           if (err) {
               console.log(err);
               res.render('error');
           }
        else {
               res.redirect('/businesses');
           }
        });
});

/* GET /businesses/delete/:_id - run a delete on selected business */
router.get('/delete/:_id', isLoggedIn, function(req, res, next) {
    // read the id value from the url
    var _id = req.params._id;

    // use mongoose to delete this business
    Business.remove( { _id: _id }, function(err) {
       if (err) {
           console.log(err);
           res.render('error', {message: 'Delete Error'});
       }
        res.redirect('/businesses');
    });
});

/* GET /businesses/:_id - show the edit form */
router.get('/:_id', isLoggedIn, function(req, res, next) {
    // get the id from the url
    var _id = req.params._id;

    // look up the selected Busiess document with this _id
    Business.findById(_id,  function(err, business) {
      if (err) {
          console.log(err);
          res.render('error', { message: 'Could not find business'});
      }
        else {
          // load the edit form
          res.render('edit-business', {
              title: 'Edit Business',
              business: business,
              user: req.user
          });
      }
    });
});

/* POST /businesses/:_id - save form to process Business updates */
router.post('/:_id', isLoggedIn, function(req, res, next) {
    // get the id from the url
    var _id = req.params._id;

    // instantiate a new Business object & populate it from the form
    var business = new Business( {
       _id: _id,
        name: req.body.name,
        owner: req.body.owner,
        year: req.body.year,
        bType: req.body.bType,
        wifi: req.body.wifi
    });

    // save the update using Mongoose
    Business.update( { _id: _id }, business, function(err) {
       if (err) {
           console.log(err);
           res.render('error', {message: 'Could not Update Business'});
       }
        else {
           res.redirect('/businesses');
       }
    });
});

// make controller public
module.exports = router;


