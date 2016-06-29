var path = require('path');

var friendsData = require('../data/friends.js');

$("#submit").on("click", function() {
            // Form validation
            function validateForm() {
                var isValid = true;
                $('.form-control').each(function() {
                    if ($(this).val() === '')
                        isValid = false;
                });
                $('.chosen-select').each(function() {
                    if ($(this).val() === "")
                        isValid = false
                })
                return isValid;
            }
            // If all required fields are filled
            if (validateForm() == true) {
                // Create an object for the user's data
                var friendData = {
                    name: $("#friend_name").val(),
                    photo: $("#friend_photo").val(),
                    scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val(), ]
                }

                $.post(currentURL + "/api/friends", newPerson,
                    function(data) {

                        if (data == true) {
                            alert("Yay! You are officially booked!")
                        }
                        // Clear the form when submitting
                    });
        
}