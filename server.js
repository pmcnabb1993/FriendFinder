//NPM Installed Dependencies 
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

//Create Express server
const app = express();
//Add port
const PORT = process.env.PORT || 3000;

//Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("app/public"));

app.use('/img', express.static(path.join(__dirname, 'app/public/img')));
app.use('/js', express.static(path.join(__dirname, 'app/public/js')));
app.use('/css', express.static(path.join(__dirname, 'app/public/css')));
app.use('/fonts', express.static(path.join(__dirname, 'app/public/fonts')));

require('./app/routing/apiRoutes.js') (app);
require('./app/routing/htmlRoutes.js') (app);


app.listen(PORT, function() {
    console.log("FriendFinder is listening on port: " + PORT );
});