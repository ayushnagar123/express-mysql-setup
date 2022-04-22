var express = require('express');
const { UrlController } = require('../controllers');
var router = express.Router();

router.post('/', UrlController.createShortUrl);

router.get('/:shortUrlId', UrlController.redirectToUrl);


module.exports = router;
