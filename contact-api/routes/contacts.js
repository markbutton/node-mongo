var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Contact = require('../models/Contact.js');

router.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin, Origin, Content-Type, Accept, Charset');
  next();
});

/* GET /contacts listing. */
router.get('/', function(req, res, next) {
  Contact.find(function (err, contacts) {
    if (err) return next(err);
    res.json(contacts);
  });
});

/* POST /contacts */
router.post('/', function(req, res, next) {
  Contact.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /contacts/id */
router.get('/:id', function(req, res, next) {
  Contact.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /contacts/:id */
router.put('/:id', function(req, res, next) {
  Contact.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /contacts/:id */
router.delete('/:id', function(req, res, next) {
  Contact.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
