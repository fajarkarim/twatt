var OAuth = require('oauth');
require('dotenv').config()

var oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  `${process.env.API_KEY}`,
  `${process.env.API_SECRET}`,
  '1.0A',
  null,
  'HMAC-SHA1'
);

var getTimeline = (req,res) => {
  oauth.get(
    `https://api.twitter.com/1.1/statuses/home_timeline.json?count=10`,
    `${process.env.TOKEN}`, //test user token
    `${process.env.TOKEN_SECRET}`, //test user secret
    function (err, data){
      if (err) console.error(err);
      res.send(data)
    });
}

var getSearch = (req,res) => {
  oauth.get(
    `https://api.twitter.com/1.1/search/tweets.json?q=${req.body.search}`,
    `${process.env.TOKEN}`,
    `${process.env.TOKEN_SECRET}`,
    function (err, data){
      if (err) console.error(err);
      res.send(data)
    });
}

var postTweet = (req,res) => {
  oauth.post(
    `https://api.twitter.com/1.1/statuses/update.json?status=${req.body.search}`,
    `${process.env.TOKEN}`, //test user token
    `${process.env.TOKEN_SECRET}`, //test user secret
    `${req.body.search}`,
    "txt",
    function (e, data){
      if (e) console.error(e);
      console.log(data);
    });
}

module.exports = {
  getTimeline,
  getSearch,
  postTweet
}
