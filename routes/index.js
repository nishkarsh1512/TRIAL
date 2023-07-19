var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET publications page. */
router.get('/pub', function(req, res, next) {
  res.render('pub_fsw', { title: 'Express' });
});
/* GET projects page. */
router.get('/projc', function(req, res, next) {
  res.render('project_fsw_c', { title: 'Express' });
});
router.get('/projs', function(req, res, next) {
  res.render('project_fsw_s', { title: 'Express' });
});
/* GET Doctoral Students page. */
router.get('/doctorals', function(req, res, next) {
  res.render('students/doctoral', { title: 'Express' });
});
/* GET UG page. */
router.get('/ug', function(req, res, next) {
  res.render('students/ug', { title: 'Express' });
});
/* GET PG page. */
router.get('/pg', function(req, res, next) {
  res.render('students/pg', { title: 'Express' });
});
/* GET Interns page. */
router.get('/interns', function(req, res, next) {
  res.render('students/interns', { title: 'Express' });
});
/* GET Staff page. */
router.get('/staff', function(req, res, next) {
  res.render('students/staff', { title: 'Express' });
});
/* GET Facilities page. */
router.get('/facilities', function(req, res, next) {
  res.render('facilities', { title: 'Express' });
});
/* GET News page. */
router.get('/news', function(req, res, next) {
  res.render('news', { title: 'Express' });
});
/* GET Collaborations page. */
router.get('/collab', function(req, res, next) {
  res.render('collab', { title: 'Express' });
});
/* GET CV page. */
router.get('/skpal', function(req, res, next) {
  res.render('skpal', { title: 'Express' });
});
/* GET Calendar page. */
router.get('/cal', function(req, res, next) {
  res.render('cal', { title: 'Express' });
});
router.get('/.well-known/acme-challenge/toflZYDJJBP1eM_CvStHwAW03wee9KI18cHhHAYl7Co', function(req, res, next) {
  res.render('one', { title: 'Express' });
});


module.exports = router;
