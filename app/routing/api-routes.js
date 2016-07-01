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

//app.get returns simple data as json...nothing really happens.
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

        // saving data from $.post in the quiz.html page
        var body = req.body;
        console.log(friends); // friends array
        console.log(body); // new user object

        var bestFriendScore = 100;
        var bestFriendIndex = 0;

        for (var i = 0; i < friends.length; i++) {
        	//calculate difference between each existing friend and user data.
            var currentdifference = calcDifference(friends[i].scores, body.scores)
            // console.log('Before if loop');
            // console.log('--------------');
            // console.log('currentdifference: ' + currentdifference);
            // console.log('bestFriendScore: ' + bestFriendScore);
            // console.log('bestFriendIndex: ' + bestFriendIndex);
            //creates some variable to store closest match and best index
            if (i == 0) {
                bestFriendIndex = i; // basically initializes bestfriend index to the first friend
                bestFriendScore = currentdifference;
            }
            if (currentdifference < bestFriendScore) {
                bestFriendIndex = i;
                bestFriendScore = currentdifference
            }
            // console.log('After loop');
            // console.log('-----------');
            // console.log('currentdifference: ' + currentdifference);
            // console.log('bestFriendScore: ' + bestFriendScore);
            // console.log('bestFriendIndex: ' + bestFriendIndex);
        }

        // console.log('bestfriendindex' + bestFriendIndex);
        // console.log('bf score: ' + bestFriendScore);
        // console.log('best friend: ' + friends[bestFriendIndex]);

        //res.json - returns the best friend as json to the html file
        res.json(friends[bestFriendIndex]);
    });
    //function calculates the difference between current friend and new friend scores
    function calcDifference(existing, newFriend) {
        var difference = 0;
        console.log('existing: ' + existing);
        console.log('new: ' + newFriend);

        for (i = 0; i < existing.length; i++) {
            // console.log(existing[i]);
            difference += Math.abs(existing[i] - newFriend[i])
        }
        return difference;
    }
}
