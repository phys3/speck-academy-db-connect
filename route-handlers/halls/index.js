const express = require('express');
const router = new express.Router();
const hallsController = require('./controller');

router.route('/halls').get(hallsController.getHalls).post(hallsController.postHall);
router.route('/halls/:hallid').get(hallsController.getSingleHall).delete(hallsController.deleteHall).put(hallsController.updateHall);

module.exports = router;
