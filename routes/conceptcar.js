var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('conceptcar', { title: 'Concept Car' });
});

module.exports = router;
