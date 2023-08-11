var express = require("express");
const { getFiles } = require("../controllers/users");
const auth = require("../middlewares/auth");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/files", auth, getFiles);
module.exports = router;
