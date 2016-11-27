/* Name: scripts.js */
/* Author: Zac Force */
/* Website Name: Business Directory */
/* File Description: js file to create functions used in the website */

// confirmation before deletion
$('.confirmation').on('click', function() {
    return confirm('Are you sure you want to delete this?');
});

//use the jquery validator to ensure passwords are equal when registering
var validator = $('#registerForm').validator({
    rules: {
        confirm: {
            required: true,
            equalTo: '#password'
        }
    },
    messages: {
        confirm: {
            equalTo: 'your passwords to not match'
        }
    }
});
