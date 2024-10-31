const express = require("express");

const router = express.Router();
const { getProduct, getSingleProduct } = require("../controllers/productController");

router.route("/product").get(getProduct);
router.route("/product/:id").get(getSingleProduct);

module.exports = router;


