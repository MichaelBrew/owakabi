var express = require('express');
var router = express.Router();
var pg = require('pg');
var sys = require('sys');

/* GET driver center page. */
router.get('/', function(req, res, next) {
  var params = {
    tab: 'Driver Center',
    drivers: null
  }
  pg.connect(process.env.DATABASE_URL, function(err, client) {
    if (!err) {
      var query = client.query("SELECT * FROM drivers", function(err, result) {
        if (!err) {
          params.drivers = result.rows
          params.removeDriver = function(driverNum) {
            console.log "wanna remove " + driverNum
          }

          res.render('drivercenter', params)
        } else {
          // Error
          sys.log("index.js: Error querying DB for drivers, " + err);
          res.render('drivercenter', params)
        }
      });
    } else {
      // Error
      sys.log("index.js: Error connecting to DB, " + err);
      res.render('drivercenter', params)
    }
  });
});

module.exports = router;
