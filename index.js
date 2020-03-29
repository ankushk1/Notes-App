const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./config/database');
const notes = require('./routes/notes');
const users = require('./routes/users');
const jwt = require('jsonwebtoken');
const app = express();

app.set('secretKey', 'api');
app.use(bodyParser.urlencoded({ extended: false}));
app.use('/users', users);
app.use('/notes', validateUser, notes);

//validate jwt
function validateUser(req, res, next) {
    jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function (err, decoded) {
        if (err) {
            res.json({
                status: "error",
                message: err.message,
                data: null
            });
        } else {
            req.body.userId = decoded.id;
            next();
        }
    });
}


app.get('/', function (req, res) {
    res.json({
        "body": "notes app"
    });
});


app.listen(8000, function() {
    console.log('Node server listening on port 8000');
});