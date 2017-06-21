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
oauth.post(
  `https://api.twitter.com/1.1/statuses/update.json?status=aku+mau+lalala`,
  `${process.env.TOKEN}`, //test user token
  `${process.env.TOKEN_SECRET}`, //test user secret
  `aku mau lalala`,
  "lala",
  function (e, data){
    if (e) console.error(e);
    // console.log((JSON.stringify(res)));
    // console.log(res);
    console.log(data);
  });
