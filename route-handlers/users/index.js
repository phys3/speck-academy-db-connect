const express = require('express');
const router = new express.Router();
const usersController = require('./controller');
router.route('/users').get(usersController.getUsers).post(usersController.postUser);
router.route('/users/:userid').get(usersController.getSingleUser).delete(usersController.deleteUser).put(usersController.updateUser);
module.exports = router;