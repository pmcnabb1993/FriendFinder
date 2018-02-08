//Require data
var friends = require('../data/friends');
var path = require('path');

module.exports = app => {
    app.get('/', (req, res) =>
      res.sendFile(path.join(__dirname, '../public/index.html'))
    );
    app.get('/survey', (req, res) =>
      res.sendFile(path.join(_dirname, '../public/survey.html'))
    );
};
