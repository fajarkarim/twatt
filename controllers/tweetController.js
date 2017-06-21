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
  // let search = req.body.search
  // console.log(search);
  oauth.get(
    `https://api.twitter.com/1.1/search/tweets.json?q=${req.body.search}&count=${+req.body.count}`,
    `${process.env.TOKEN}`,
    `${process.env.TOKEN_SECRET}`,
    function (err, data){
      if (err) console.error(err);
      res.send(data)
    });
}

module.exports = {
  getTimeline,
  getSearch
}
