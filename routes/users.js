var express = require("express");
const { getFiles, getDriveInfo } = require("../controllers/users");
const auth = require("../middlewares/auth");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/drive/files", auth, getFiles);
router.get("/drive/info", auth, getDriveInfo);
module.exports = router;
