var express = require('express');
const { google } = require('googleapis');
const { googleRedirect, googleCallback } = require('../controllers/auth');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/google/redirect', googleRedirect);
router.get('/google/callback', googleCallback);
module.exports = router;
