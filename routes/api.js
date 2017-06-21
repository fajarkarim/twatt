var express = require('express');
var router = express.Router();
var tweetController = require('../controllers/tweetController')

/* GET users listing. */
router.get('/timeline', tweetController.getTimeline);
router.post('/search', tweetController.getSe);

module.exports = router;
