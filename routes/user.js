const express = require("express")
const router = express.Router();
const {getUser, deleteUser} = require("../controllers/userController.js");
const { verifyToken } = require("../middleware/verifyToken.js");



router.get("/:username",verifyToken, getUser)
router.delete("/", verifyToken, deleteUser)

module.exports = router;
