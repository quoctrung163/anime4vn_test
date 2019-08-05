const express = require('express');
const router = express.Router();
const controller = require('../controllers/auth');

router.get('/login', controller.login);

// router.get('/logout', controller.logout);

// router.get('/register', controller.register);
// router.post('/register', controller.postRegister);
module.exports = router;