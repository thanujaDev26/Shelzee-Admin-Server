const express = require("express");
const Controller = require("../Controllers/ProductsController")

const router = express.Router();

router.route('/create-product')
    .post(Controller.createProduct)

router.route('/update-product/:name')
    .put(Controller.updateProduct)

router.route('/delete-product/:name')
    .delete(Controller.deleteProduct)

router.route('/get-product/:name')
    .get(Controller.getOneProduct)

router.route('/get-products')
    .get(Controller.getAllProducts)

module.exports = router;