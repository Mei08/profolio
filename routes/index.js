var express = require('express');
var router = express.Router();

/* GET pages. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'meiHe' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});
router.get('/project', function(req, res, next) {
  res.render('project', { title: 'project' });
});
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'services' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'contact' });
});

module.exports = router;
