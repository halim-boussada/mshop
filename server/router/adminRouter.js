const router = require("express").Router();
const adminController = require("../controller/adminController.js");
const { verifyAccessToken } = require("../jwt_helpers.js");

router.get("/", verifyAccessToken(["Admin"]), adminController.getadmin);
router.get(
  "/paiments",
  // verifyAccessToken(["Admin"]),
  adminController.getpaiments
);
router.delete(
  "/:id",
  verifyAccessToken(["Admin"]),
  adminController.deleteByParams
);
router.put(
  "/password/:id",
  verifyAccessToken(["Admin"]),
  adminController.updatedPassword
);
router.put("/confirmPay/:_id", adminController.confirmPaiment);

module.exports = router;
