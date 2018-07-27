var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'components')));
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'templates/index.html'));
})

app.listen(3002, function() {
    console.log('Listening on port 3002...');
})