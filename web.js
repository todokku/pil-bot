(function () {
    'use strict';

    var express = require('express');

    var app = express();
    var PORT = process.env.PORT || 9001;

    app.listen(PORT, function () {
        console.log('Server started on port ' + PORT);
    });

    app.get('/', function (req, res) {
        var name = req.query.name || 'John Smith';
        res.send('Hello ' + name);
    });
})();
