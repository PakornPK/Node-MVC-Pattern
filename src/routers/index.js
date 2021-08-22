const express = require('express');
const router = new express.Router();
const home = require('./HomeRouter');

router.use(home);

module.exports = router;
