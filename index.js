var ttLite = require('twitter-rest-lite'),
    Timelines = require('./lib/timelines'),
    Tweets = require('./lib/tweets'),
    Search = require('./lib/search'),
    uri = {
      base: 'https://api.twitter.com/1.1',
      search: 'https://api.twitter.com/1.1/search'
    };

/**
 *  Main
 *  ====
 *
 *  All the exported functions expect an Object with the params:
 *
 *  consumer_key          - [Required]
 *  consumer_secret       - [Required]
 *  token                 - [Optional]
 *  token_secret          - [Optional, but required if `token` was given]
 *
 *  The main will export all the functions implemented.
 *
 *  At the moment they are:
 *  - api
 *  - oauth
 **/
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
