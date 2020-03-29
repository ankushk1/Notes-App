const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notesSchema = new Schema({
    notes: {
        type: String,

        required: true,
    },
    date: {
        type: String,
        required: true
    }
    
}, {
    timestamps: true
});

//export
module.exports = mongoose.model('notes', notesSchema)