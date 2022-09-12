const router = require("express").Router();
const adminController = require("../adminAuthController/controller.js");

router.post("/signup", adminController.signUpadmin);
router.post("/signin", adminController.login);
router.post("/verify", adminController.verify);

module.exports = router;
