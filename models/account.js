/* Name: account.js */
/* Author: Zac Force */
/* Website Name: Business Directory */
/* File Description: account schema for the users page */

var mongoose = require('mongoose');

// reference passport-local-mongoose so passport can use this model for user authentication
var plm = require('passport-local-mongoose');

// define the user schema
var AccountSchema = new mongoose.Schema({
    username: {
        type: String,
        required: 'No username entered'
    },
    oauthID: String,
    created: Date
});

// used for configuring options
AccountSchema.plugin(plm);

// make it public
module.exports = mongoose.model('Account', AccountSchema);
