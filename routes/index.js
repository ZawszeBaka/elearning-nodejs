var express = require('express');
var router = express.Router();

// const {Client} = require('pg');
// const client = new Client({
//   // user:'non',
//   // host:'localhost',
//   // database:'elearning',
//   // password:'1024',
//   // port:5432,
//
//   /*
//   $ sudo -u postgres psql
//   ALTER USER postgres PASSWORD '1024';
//
//   postgresql://[user[:password]@][netloc][:port][/dbname][?param1=value1&...]
//
//   postgresql://
//   postgresql://localhost
//   postgresql://localhost:5432
//   postgresql://localhost/mydb
//   postgresql://user@localhost
//   postgresql://user:secret@localhost
//   postgresql://other@localhost/otherdb?connect_timeout=10&application_name=myapp
//   postgresql://localhost/mydb?user=other&password=secret
//   */
//   // connectionString:"postgresql://postgres:1024@localhost:5432/elearning",
//   // connectionString:"postgresql://postgres:1024@localhost:5432/elearning",
//   connectionString:process.env.DATABASE_URL,
//   ssl:false,
// });
//
// client.connect(function(err){
//   if(err){
//     console.log('[ERROR] Connect to PostgreSQL. Failed!');
//     console.log(err);
//   }else{
//     console.log('[ERROR] Connect to PostgreSQL. Successful!');
//   }
// });

// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "1234",
//     database: "elearning"
// });

let cookies_options = {
        maxAge: 1000 * 60 * 15, // would expire after 15 minutes
        httpOnly: true, // The cookie only accessible by the web server
        signed: true // Indicates if the cookie should be signed
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'E-Learning' }); // index.hbs file is rendered
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
router.get('/checkConnection', function(req, res, next){

	res.render('checkConnection', {title: 'Contact'}); // contact.hbs file is rendered
});

router.post('/contact', function(req, res, next){
	res.render('submitted-form', {title: 'Thank you for using our services'}); // contact.hbs file is rendered
});

// Sign up page
router.get('/sign-up', function(req, res, next){
	res.render('sign-up', {title: 'Sign up'}); // sign-in.hbs file is rendered
});

router.post('/sign-up', function(req, res, next){
  var data = req.body;
  console.log(' [INFO] Input ');
  console.log(data);

  // GET MAX ID
  var max_id = 0;
  // con.query( "SELECT MAX(MaNgD) as max_id FROM NGD ", function(err, rs, fields){
  //     if (err) throw err;
  //     max_id = rs[0]["max_id"] + 1;
  //     var sql = "INSERT INTO NGD VALUES("
  //       + max_id + ","
  //       + "'" + req.body.last_name + "',"
  //       + "'" + req.body.first_name + "',"
  //       + "'" + req.body.birthday + "',"
  //       + req.body.id + ","
  //       + "'" + req.body.address + "',"
  //       + "'" + req.body.gender + "',"
  //       + "'" + req.body.phone_number + "',"
  //       + "'" + req.body.email + "',"
  //       + "'" + req.body.username + "',"
  //       + "'" + req.body.password + "')";
  //     console.log(" [QUERY] " + sql);
  //
  //     con.query(sql, function(err, rs, fields){
  //         console.log(' [INFO] Result ');
  //         console.log(rs);
  //         if (err) {
  //             res.render('sign-up', {title: 'Sign up', status: 'Some fields may be wrong ! '});
  //         }else{
  //             res.render('sign-up', {title: 'Sign up'});
  //         }
  //
  //     });
  // });
});

// Log in page
router.get('/log-in', function(req, res, next){
  // read cookies
  console.log(" [INFO] Cookies : ");
  console.log(req.cookies);

	res.render('log-in', {title: 'Log in'}); // sign-in.hbs file is rendered
});

router.post('/log-in', function(req, res, next){
  var data = req.body;
  console.log(' [INFO] Input ');
  console.log(data);
  var sql = "SELECT * FROM NGD WHERE TenNguoiDung = '" + req.body.username + "' AND MatKhau = '" + req.body.password + "'";
  console.log(" [QUERY] " + sql);
  // con.query(sql, function(err, rs, fields){
  //     if (err) throw err;
  //     console.log(' [INFO] Result ');
  //     console.log(rs);
  //
  //     // not found this username
  //     if(rs.length == 0){
  //         res.render('log-in', {title: 'Log in', 'status': 'This username does not exist'});
  //     }
  //     else{
  //         res.render('log-in', {title: 'Log in'}); // sign-in.hbs file is rendered
  //         res.cookie('MaNgD', rs[0]["MaNgD"]);
  //     }
  // });

});



// Admin page
router.get('/admin', function(req,res,next){
  var sql = "SELECT * FROM NGD ";
  console.log(" [QUERY] " + sql);
  // con.query(sql, function(err, rs, fields){
  //     if (err) throw err;
  //     console.log(' [INFO] Result ');
  //     console.log(rs);
  //     res.render('admin', {title: 'Admin', users:rs});
  // });
});

// Not available right now
router.get('/not-available', function(req, res, next){
	res.render('not-available', {title: 'Not available right now'}); // not-available.hbs file is rendered
});

module.exports = router;
