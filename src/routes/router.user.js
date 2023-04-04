const express = require('express');
const Controller = require('../controllers/user.controller');

const router = express.Router();

router.get('/user', Controller.user);

module.exports = router;
