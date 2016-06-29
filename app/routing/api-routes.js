// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources. 
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friends 		= require('../data/friend-data.js');
var path 			= require('path');

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app){

	// API GET Requests
	// Below code handles when users "visit" a page. 
	// In each of the below cases when a user visits a link 
	// (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table) 
	// ---------------------------------------------------------------------------

	app.get('/api/friends', function(req, res){
		console.log('inside api-routes function');
		console.log(friends);
		res.json(friends);

	});

	// API POST Requests
	// Below code handles when a user submits a form and thus submits data to the server.
	// In each of the below cases, when a user submits form data (a JSON object)
	// ...the JSON is pushed to the appropriate Javascript array
	// (ex. User fills out a reservation request... this data is then sent to the server...
	// Then the server saves the data to the tableData array)
	// ---------------------------------------------------------------------------

	app.post('/api/friends', function(req, res){

		// Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
		// It will do this by sending out the value "true" have a table 
		var body = req.body;
		console.log(friends);
		console.log(body);

		var bestFriendScore;
		var bestFriendIndex;
		var currentFriendScore;

	// 	for (i=0; i<friends.length; i++){


	// 	for (i = 0; i < friends[i].scores.length; i++){



	// 	}

	// }
		res.json(body);
			//friendData.push(req.body);
			//console.log(friendData);
			//res.json(true); // KEY LINE

	});

	// ---------------------------------------------------------------------------
	// I added this below code so you could clear out the table while working with the functionality.
	// Don't worry about it!

	// app.post('/api/clear', function(req, res){
	// 	// Empty out the arrays of data
	// 	friendData = [];
		
	// 	console.log(friendData);
	// })
}