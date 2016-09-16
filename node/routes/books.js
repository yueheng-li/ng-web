var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId; 

var Books = require('../models/books.js');

/* GET users listing. */
router.get('/', function(req, res, next) {

    Books.find({},{},function (err, docs) {
      res.json(docs);
    });
});

/*
 * Get book list.
 */
router.get('/booklist', function(req, res) {

    Books.find({},{},function (err, docs) {
      res.json(docs);
    });
});

/*
 * Get book.
 */
router.get('/book/:id', function(req, res) {

	var id = req.params.id;

	Books.find({"_id":id},{},function (err, docs) {
      res.json(docs);
    });
});

/*
 * post add book .
 */
router.post('/addbook', function(req, res) {

	// 跨域访问设定
	console.log(req.body.data.name);
	console.log(req.body.data.img);
	console.log(req.body.data.description);
	var img = req.body.data.img;
	var name = req.body.data.name;
	var des = req.body.data.description;
	var update = {
		"name" : name,
		"img" : img,
		"description" : des,
	};
	console.log(update);
    Books.update({"_id":req.body.data._id}, update, function(err) {
	  if (err) return res.json({
	    'status': 'ng',
	    'url': req.originalUrl,
	    'error': 'Not found'
	  });

	  return res.json({
	    'status': 'ok',
	    'url': req.originalUrl,
	    'error': ''
	  });

	});

});

module.exports = router;
