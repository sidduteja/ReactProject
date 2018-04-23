var express = require('express');
var router = express.Router();
var Login = require('../models/login');

router.post('/', function(req, res, next) {

    Login.authCheck(req.body.userName, function(err, rows) {

        if (err) {
            res.json(err);
        } else {

            res.json(rows); //or return count for 1 & 0
        }
    });
});





  

    

    

module.exports = router;
