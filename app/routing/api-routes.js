// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources. 
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friends = require('../data/friend-data.js');
var path = require('path');

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

    // API GET Requests
    // Below code handles when users "visit" a page. 
    // In each of the below cases when a user visits a link 
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table) 
    // ---------------------------------------------------------------------------

    app.get('/api/friends', function(req, res) {
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

    app.post('/api/friends', function(req, res) {

        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
        // It will do this by sending out the value "true" have a table 
        var body = req.body;
        console.log(friends); // friends array
        console.log(body); // inputted object




        //Compare the values to each array to come up with a match
        // i = first array, j = second array
        //var currentDifference = 0;
        var bestFriendScore = 100;
        var bestFriendIndex = 0;

        for (var i = 0; i < friends.length; i++) {
            var currentdifference = calcDifference(friends[i].scores, body.scores)
            console.log('Before if loop');
            console.log('--------------');
            console.log('currentdifference: ' + currentdifference);
            console.log('bestFriendScore: ' + bestFriendScore);
            console.log('bestFriendIndex: ' + bestFriendIndex);
            if (i == 0) {
                bestFriendIndex = i;
                bestFriendScore = currentdifference;
            }
            if (currentdifference < bestFriendScore) {
                bestFriendIndex = i;
                bestFriendScore = currentdifference
            }
            console.log('After loop');
            console.log('-----------');
            console.log('currentdifference: ' + currentdifference);
            console.log('bestFriendScore: ' + bestFriendScore);
            console.log('bestFriendIndex: ' + bestFriendIndex);
        }

        console.log('bestfriendindex' + bestFriendIndex);
        console.log('bf score: ' + bestFriendScore);
        console.log('best friend: ' + friends[bestFriendIndex]);
        // console.log(difference);


        // for (var i = 0; i < friends[0].scores.length; i++) {
        // 	for (var j = 0; j < friends[1].scores.length; j++) { 
        // 		if (i == j) {
        // 			// subtract both values from the array and make sure it's positive numbers
        // 			total = Math.abs(parseInt(friends[0].scores[i]) - parseInt(friends[1].scores[j]));
        // 			totalDifference = parseInt(totalDifference) + parseInt(total);
        // 			console.log("friends[0].scores[i]:"+friends[0].scores[i]);
        // 			console.log("friends[1].scores[j]:"+friends[1].scores[j]);
        // 			console.log("totalDifference: "+totalDifference);
        // 			console.log("==========================");
        // 		}
        // 	}
        // }
        //console.log(totalDifference);
        res.json(friends[bestFriendIndex]);
    });

    function calcDifference(existing, newFriend) {
        var difference = 0;
        console.log('existing: ' + existing);
        console.log('new: ' + newFriend);

        for (i = 0; i < existing.length; i++) {
            // console.log(existing[i]);
            difference += Math.abs(existing[i] - newFriend[i])
        }
        console.log(difference);
        return difference;
    }
}
