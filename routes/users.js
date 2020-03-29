const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');

router.post('/register', userController.create);
router.post('/login', userController.login);


//export router
module.exports = router;