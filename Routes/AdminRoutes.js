const express = require('express')
const Controller = require('../Controllers/AdminController')
let router = express.Router()

router.route('/admin-sign')
    .get(Controller.loginAdmin);

router.route('/admin-signup')
    .post(Controller.createAdmin)


module.exports = router;
