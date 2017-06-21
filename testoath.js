var OAuth = require('oauth');
require('dotenv').config()

var status = "hahaha"

var oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  `${process.env.API_KEY}`,
  `${process.env.API_SECRET}`,
  '1.0A',
  null,
  'HMAC-SHA1'
);
oauth.get(
  `https://api.twitter.com/1.1/search/tweets.json?q=trumph`,
  `${process.env.TOKEN}`, //test user token
  `${process.env.TOKEN_SECRET}`, //test user secret
  function (e, data){
    if (e) console.error(e);
    // console.log((JSON.stringify(res)));
    // console.log(res);
    console.log(data);
  });
