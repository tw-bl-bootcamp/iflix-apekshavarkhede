const express = require('express')
const router = express.Router();
const controller = require('../Controller/controller');
router.post("/login", controller.loginCtrl)
module.exports = router;