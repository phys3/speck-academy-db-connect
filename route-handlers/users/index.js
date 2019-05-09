const express = require('express');
const router = new express.Router();
const usersController = require('./controller');
router.route('/users').get(usersController.getUsers);
module.exports = router;