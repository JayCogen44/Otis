var express = require('express');
var app = express();

app.get('/yo', function (req, res) {
    res.json('Holy shit this works');
});

app.listen(3300, function () {
    console.log('listening on port 3300');
}); //listens on port 3300 -> http://localhost:3300/