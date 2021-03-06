const mongoose = require('mongoose');
//connect
mongoose.connect('mongodb://localhost/notes_app');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function () {
    console.log('Connected to Database :: MongoDB');
});

//export db
module.exports = db;