var express = require("express");
const { getFiles } = require("../controllers/users");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/getfiles", getFiles);
module.exports = router;
