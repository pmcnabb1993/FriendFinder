const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const PORT = process.env.port || 3000;

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(PORT, () => console.log(`App running on ${PORT}`));

require('/app/routes/apiRoutes.js')
require('/app/routes/htmlRoutes.js')