var express = require('express');
var router = express.Router();
var db = require("../database.js");

/* GET users listing. */
router.get('/', function(req, res, next) {
  var sql = "select * from user";
  var params = [];
  db.serialize(function() {
    db.all(sql, params, (err, rows) => {
      if (err) {
        res.status(400).json({"error": err.message});
        return;
      } else {
        res.json({"message": "success", "data": rows})
      }
    });
  })
  // res.send('respond with a resource');
});

module.exports = router;
