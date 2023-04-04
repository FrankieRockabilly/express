const express = require('express');
const Controller = require('../controllers/admin.con');

const router = express.Router();

router.get('/admin', Controller.adminCon);

module.exports = router;
