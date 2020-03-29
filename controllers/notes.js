const item = require('../models/notes');

//all operations require json web token
module.exports = {
    //create
    create: function (req, res, next) {
        item.create({
            notes: req.body.notes,
            date: req.body.date
        }, function (err, result) {
            if (err)
                next(err);
            else
                res.json({
                    status: "Success",
                    message: "Note added successfully",
                    data: null
                });

        });
    },

    //get all notes list
    getAll: function (req, res, next) {
        let noteslist = [];
        item.find({}, function (err, notes) {
            if (err) {
                next(err);
            } else {
                for (let note of notes) {
                    noteslist.push({
                        id: note._id,
                        notes: note.notes,
                        date: note.date
                    });
                }
                res.json({
                    status: "Success",
                    message: "List found",
                    data: {
                        notes: noteslist
                    }
                });

            }
        });
    },


    //get by id
    getById: function (req, res, next) {
        item.findById(req.params.id, function (err, result) {
            if (err) {
                next(err);
            } else {
                res.json({
                    status: "Success",
                    message: "Note found",
                    data: {
                        notes: result
                    }
                });
            }
        });
    },


    //delete
    deleteById: function (req, res, next) {
        item.findByIdAndRemove(req.params.id, function (err, result) {
            if (err)
                next(err);
            else {
                res.json({
                    status: "Success",
                    message: "Note deleted successfully",
                    data: null
                });
            }
        });
    },


    //update
    updateById: function (req, res, next) {
        item.findByIdAndUpdate(req.params.id, {
            notes: req.body.notes
        }, function (err, result) {
            if (err)
                next(err);
            else {
                res.json({
                    status: "success",
                    message: "Note updated successfully",
                    data: null
                });
            }
        });
    },



}