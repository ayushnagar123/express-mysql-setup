var express = require('express');
var router = express.Router();
// const UserRoutes = require('./user-routes');
const UrlRoutes = require('./url-routes');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.status(200).json('hello world!');
})

// router.use('/users', UserRoutes);
router.use('/urls', UrlRoutes);

module.exports = router;
