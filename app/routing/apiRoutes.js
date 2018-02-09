//Load Data

var friendData = require("../data/friends");

//GET Routing
module.exports = function(app) {
    app.get('/api/friends.js', (req, res) => res.json(friendData)); 
    app.post('/api/friends.js', (req, res) => {
        var friendNew = req.body;
        var friendMatch = friendData

        .map(friendData => {
            return {
                name: friendData.name,
                picture: friendData.photo,
                score: friendData.scores
                  .map((a,i) => Math.abs(a - friendNew.answer[i]))
                  .filter(a => a)
                  .reduce((s, x) => s + x, 0)
            };
        })
        .sort((p1, p2) => p1.score - p2.score) [0];
        friends.push(friendNew);
        return res.json(friendMatch);
    });
};