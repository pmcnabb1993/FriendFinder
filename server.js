//NPM Installed Dependencies 
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

//Create Express server
const app = express();
//Add port
const PORT = process.env.port || 3000;

//Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/css', express.static(path.join(_dirname, 'app/public/css')));


require('./app/routing/apiRoutes.js');
require('./app/routing/htmlRoutes.js');


app.listen(PORT, function(){
    constole.log("FriendFinder is listening on port: " + PORT );
});