//Load Data

var friends = require("../data/friends.js");

//GET Routing
module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
        var friendAPI = req.friends;
        res.json(friends);
    }); 
    app.post('/api/friendData', function(req, res) {
        var friendNew = req.body;
        friends.push(friendNew);
        res.json(friendNew);
      });
    };

       