const express = require("express");


const router = express.Router();
const { postOrder } = require("../controllers/orderController");

router.route('/order').post(postOrder);

module.exports = router;