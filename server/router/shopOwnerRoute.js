const router = require("express").Router();
const ShopOwnerController = require("../controller/shopOwnerController.js");
const { verifyAccessToken } = require("../jwt_helpers.js");

router.get(
  "/:id",
  verifyAccessToken(["Admin", "ShopOwner", "Coach"]),
  ShopOwnerController.getShopOwnerById
);
router.get("/", verifyAccessToken(["Admin"]), ShopOwnerController.getShopOwner);
router.put(
  "/:id",
  verifyAccessToken(["Admin", "ShopOwner"]),
  ShopOwnerController.updated
);
router.delete(
  "/:id",
  verifyAccessToken(["Admin", "ShopOwner"]),
  ShopOwnerController.deleteByParams
);
router.put(
  "/password/:id",
  verifyAccessToken(["Admin", "ShopOwner"]),
  ShopOwnerController.updatedPassword
);

module.exports = router;
