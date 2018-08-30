var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ACB Win - Banking without walls ' }); // index.hbs file is rendered 
});

// About page
router.get('/about-us', function(req, res, next) {
  res.render('about-us', { title: 'About us' }); // about-us.hbs file is rendered 
});

// Services
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' }); // services.hbs file is rendered 
});

// Gallery 
router.get('/gallery', function(req, res, next){
	res.render('gallery', {title: 'Gallery'}); // gallery.hbs file is rendered 
});

// Contact 
router.get('/contact', function(req, res, next){ 
	res.render('contact', {title: 'Contact'}); // contact.hbs file is rendered 
});

module.exports = router;
