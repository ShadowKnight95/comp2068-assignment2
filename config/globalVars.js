/* Name: globalVars.js */
/* Author: Zac Force */
/* Website Name: Business Directory */
/* File Description: global variables for the application */
module.exports = {
	db: 'mongodb://admin:password@ds143767.mlab.com:43767/comp2068',
	secret: 'zzz',
	ids: {
		facebook: {
			clientID: '1650675338559143',
			clientSecret: '21e9291b052a4af337e4356655624e40',
			callbackURL: 'http://localhost:3000/facebook/callback'
		}
	}
};