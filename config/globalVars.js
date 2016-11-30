/* Name: globalVars.js */
/* Author: Zac Force */
/* Website Name: Business Directory */
/* File Description: global variables for the application */
module.exports = {
	db: 'mongodb://admin:password@ds143767.mlab.com:43767/comp2068',
	secret: 'zzz',
	
	ids: {
				github: {
				clientID: 'bf421d6792068728a991',
				clientSecret: 'c9cd9e31f55fd6fb83b084ac6f0bfc1745a66d02',
				callbackURL: 'https://assignment2-200314576.herokuapp.com/github/callback'
			},
			twitter: {
				consumerKey: '923CusIkEKoK0j1l5i6WcesoG',
    			consumerSecret: 'UtZvQP1dSv3DVflClVx4ucYlBdgqrCKA5UBVviLPRLhQCJfTJN',
    			callbackURL: "https://assignment2-200314576.herokuapp.com/twitter/callback"
			}
	}
};