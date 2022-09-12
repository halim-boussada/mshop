const router = require("express").Router();
const ProductController = require("../controller/productController");
const { verifyAccessToken } = require("../jwt_helpers.js");

router.post("/create", ProductController.postProduct);
router.delete("/:id", ProductController.delet);
router.put("/:id", ProductController.update);
router.get("/", ProductController.get);
router.get("/findone/:id", ProductController.getProductById);
module.exports = router;
