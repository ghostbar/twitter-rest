//
// twitter-rest
// ============
//
// A (work-in-progress) Twitter REST-API library.
//
// It depends on [`twitter-rest-lite`](https://github.com/ghostbar/twitter-rest-lite)
// for the basic API and OAuth requests.
//


var ttLite = require('twitter-rest-lite'),
    Timelines = require('./lib/timelines'),
    Tweets = require('./lib/tweets'),
    Search = require('./lib/search'),
    uri = {
      base: 'https://api.twitter.com/1.1',
      search: 'https://api.twitter.com/1.1/search'
};

//
// Quick Usage
// -----------
//
// ```
// var TwitterLib = require('twitter-rest'),
//     twitter = new TwitterLib({
//       consumer_key: '...',
//       consumer_secret: '...',
//       token: '...',
//       token_secret: '...'
//     });
//
//  twitter.search.query({
//    q: 'Hello',
//    count: 2
//  });
//  ```
//
// #### PLEASE BE WARNED
//
// Using the complete `require` is only recommended if `token` and
// `token_secret` already exists.
//
// Otherwise the API module will throw an Error since it does need those
// two variables to do any of the calls.
//
// What's available on the initialized object?
// -------------------------------------------
//
// + API
// + OAuth
// + Timelines
// + Tweets
// + Search
//
// Parameters to initialize any of the Objects/Modules
// ---------------------------------------------------
//
// + `consumer_key`          - [Required]
// + `consumer_secret`       - [Required]
// + `token`                 - [Optional]
// + `token_secret`          - [Optional, but required if `token` was given]
//
// #### Code
module.exports = function(opts) {
  return {
    API: new ttLite.API(uri, opts),
    OAuth: new ttLite.OAuth(uri, opts),
    Timelines: new Timelines(uri, opts),
    Tweets: new Tweets(uri, opts),
    Search: new Search(uri, opts)
  }
};

module.exports.OAuth = function(opts) {
  return new ttLite.OAuth(uri, opts);
};

module.exports.API = function(opts) {
  return new ttLite.API(uri, opts);
};

module.exports.Timelines = function(opts) {
  return new Timelines(uri, opts);
};

module.exports.Tweets = function(opts) {
  return new Tweets(uri, opts);
};

module.exports.Search = function(opts) {
  return new Search(uri, opts);
};
