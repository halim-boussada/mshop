const router = require("express").Router();
const userController = require("../shopOwnerAuthController/controller.js");

router.post("/signup", userController.signUpUser);
router.post("/signin", userController.login);
router.post("/verify", userController.verify);
router.post("/forgetPassword", userController.forgetPassword);
router.post("/updatePassword", userController.updatedPassword);

module.exports = router;
