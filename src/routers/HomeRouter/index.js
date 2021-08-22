const express = require('express');
const router = new express.Router();
const controller = require('../../controllers');

router.get('/', controller.home.sayHello);

module.exports = router;
