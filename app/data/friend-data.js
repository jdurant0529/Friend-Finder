// ===============================================================================
// DATA
// Below data will hold all of the friends data
// Initially we just set it equal to a "dummy" friend. 
// But you could have it be an empty array as well.
// ===============================================================================

var friends = [{
    name: "James",
    photo: "https://avatars0.githubusercontent.com/u/6492373?v=3&s=460",
    scores: [
        "1",
        "1",
        "4",
        "3",
        "2",
        "1",
        "4",
        "3",
        "5",
        "3"
    ]
},
{
    name: "Steve",
    photo: "https://upload.wikimedia.org/wikipedia/en/e/e0/Steve_Urkel.jpg",
    scores: [
        "1",
        "5",
        "5",
        "2",
        "4",
        "5",
        "3",
        "1",
        "4",
        "2"
    ]
},
{
    name: "Mike",
    photo: "http://a4.files.biography.com/image/upload/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTE1ODA0OTcxODA5NzM2MjA1.jpg",
    scores: [
        "3",
        "3",
        "5",
        "5",
        "4",
        "2",
        "3",
        "4",
        "5",
        "2"
    ]
},
{
    name: "Jerry",
    photo: "http://blog.kevineikenberry.com/wp-content/uploads/2013/10/seinfeld_jerry.jpg",
    scores: [
        "2",
        "3",
        "1",
        "1",
        "2",
        "3",
        "4",
        "3",
        "1",
        "3"
    ]
},
{
    name: "Larry",
    photo: "https://s3-us-west-2.amazonaws.com/find-a-grave-prod/photos/2002/106/338_1019036234.jpg",
    scores: [
        "3",
        "4",
        "2",
        "2",
        "3",
        "4",
        "5",
        "3",
        "2",
        "4"
    ]
}, ]


// Note how we export the array. This makes it accessible to other files using require. 
module.exports = friends;
