var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'ACB Win - Banking without walls ' }); // index.hbs file is rendered 
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

router.post('/contact', function(req, res, next){ 
	res.render('submitted-form', {title: 'Thank you for using our services'}); // contact.hbs file is rendered 
});

// Not available right now 
router.get('/not-available', function(req, res, next){ 
	res.render('not-available', {title: 'Not available right now'}); // not-available.hbs file is rendered 
});

module.exports = router;
