//Load Data

var friendData = require("../data/friends.js");

//GET Routing
module.exports = function(app) {
    app.get('/api/friendData', function(req, res) {
        var friendsAPI = req.friends;
        res.json(friendData);
    }); 
    app.post('/api/friendData', function(req, res) {
        var friendNew = req.body;
        friendData.push(friendNew);
        res.json(friendNew);
      });
    };

       