/* Name: business.js */
/* Author: Zac Force */
/* Website Name: Business Directory */
/* File Description: connects the business page to the db */

// define a Business class using Mongoose and make it public
var mongoose = require('mongoose');

// define the class using a mongoose schema
var businessSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'No name entered'
    },
    owner: {
        type: String,
        required: 'No owner entered'
    },
    year: {
        type: Number,
        required: 'No year entered'
    },
    bType: {
        type: String,
        required: 'No type entered'
    },
    wifi: {
        type: String,
        required: 'No wifi entered'
    }
});

// make the class definition public as "Business"
module.exports = mongoose.model('Business', businessSchema);