var express = require('express');
var router = express.Router({strict: true});
var debug = require('debug')('myRWS:v1');
var env_config = require('../env_config');
var mysql = require('mysql');
var db = mysql.createPool(env_config.db);

db.on('enqueue', function () {
    debug('DB Overloaded!');
});

router.get('/freeway', function(req, res, next) {
    if (req.query.id) {
        var query = 'SELECT * FROM myRWS.freeway WHERE id=' + mysql.escape(req.query.id);

        console.log('query: [' + query + ']');
        db.query(query, function (err, rows, fields) {
            if (err) { throw err; }
            if (rows[0]) {
                res.send(JSON.stringify(rows[0]));
            } else {
                res.send(JSON.stringify({}));
            }
        });
    } else {
        db.query('SELECT * FROM myRWS.freeway', function (err, rows, fields) {
            res.send(JSON.stringify(rows));
        });
    }
    //console.log('query:' + req.query);
});

router.get('/station', function(req, res, next) {
    var query = 'SELECT * FROM myRWS.weight_station WHERE ';

    if (req.query.freeway) {
        query += 'freeway_id' + mysql.escape(req.query.freeway);
    }

    if (req.query.freeway) {
        //var query = 'SELECT * FROM myRWS.weight_station WHERE id=' + mysql.escape(req.query.id);

        console.log('query: [' + query + ']');
        db.query(query, function (err, rows, fields) {
            if (err) { throw err; }
            if (rows[0]) {
                res.send(JSON.stringify(rows[0]));
            } else {
                res.send(JSON.stringify({}));
            }
        });
    } else {
        db.query('SELECT * FROM myRWS.freeway', function (err, rows, fields) {
            res.send(JSON.stringify(rows));
        });
    }
    //console.log('query:' + req.query);
});

module.exports = router;
