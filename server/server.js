var express = require('express');
var bodyParser = require('body-parser')

var app = express();
app.use(bodyParser.json({ type: 'application/json' }));
require('./routes')(app);

app.listen(3001);
console.log("Jammin\' on port 3001...");