const express = require('express');
const router = express.Router();
const controller = require('../controllers/user');

router.get('/home', controller.home);

module.exports = router;