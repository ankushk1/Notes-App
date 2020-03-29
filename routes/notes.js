const express = require('express');
const router = express.Router();
const ApiController = require('../controllers/notes');


router.post('/newNote', ApiController.create);
router.get('/getNotes', ApiController.getAll);
router.get('/:id', ApiController.getById);
router.delete('/:id/deleteNote', ApiController.deleteById);
router.put('/:id/updateNote', ApiController.updateById);

//export router
module.exports = router;