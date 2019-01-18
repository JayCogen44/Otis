var express = require('express');
var app = express();

app.get('/yo', function (req, res) {
    res.json('Holy shit this works');
});

app.listen(3000, function () {
    console.log('listening on port 3000');
}); //listens on port 3000 -> http://localhost:3000/