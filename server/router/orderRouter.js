const router = require("express").Router();
const OrderController = require("../controller/orderController");
const { verifyAccessToken } = require("../jwt_helpers.js");

router.get("/", OrderController.get);
router.post("/create", OrderController.postOrder);
router.delete("/:id", OrderController.delet);
router.put("/:id", OrderController.update);

module.exports = router;
