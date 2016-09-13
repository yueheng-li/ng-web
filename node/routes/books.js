var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId; 

var Books = require('../models/books.js');

/* GET users listing. */
router.get('/', function(req, res, next) {

	// 跨域访问设定
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Credentials', true);
	res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    Books.find({},{},function (err, docs) {
      res.json(docs);
    });
});

/*
 * Get book list.
 */
router.get('/booklist', function(req, res) {
	// 跨域访问设定
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Credentials', true);
	res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    Books.find({},{},function (err, docs) {
      res.json(docs);
    });
});

/*
 * Get book.
 */
router.get('/book/:id', function(req, res) {
	// 跨域访问设定
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Credentials', true);
	res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
	var id = req.params.id;
	Books.find({"_id":id},{},function (err, docs) {
      res.json(docs);
    });
});

module.exports = router;
