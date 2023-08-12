var express = require("express");
const auth = require("../middlewares/auth");
const {
  googleRedirect,
  googleCallback,
  revokeGoogle,
} = require("../controllers/auth");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/google/redirect", googleRedirect);
router.get("/google/callback", googleCallback);
router.delete("/google/revoke", auth, revokeGoogle);
module.exports = router;
