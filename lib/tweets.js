'use strict';
//
// Module: Tweets
// ==============
//
// Convenience methods for Tweets actions directly from [Twitter's API 1.1](https://dev.twitter.com/docs/api/1.1#111).
//
// + [Show](#show)
// + [Destroy](#destroy)
// + [Update](#update)
// + [retweet](#retweet)
// + [Update with Media](#updateWithMedia)
// + [O Embed](#oembed)
// + [Retweeters](#retweeters)
//
// #### Code
var Tweets;

module.exports = Tweets = (function() {

  //
  // <a name='constructor'></a>
  // Constructor
  // -----------
  //
  // #### Code 
  function Tweets(uri, opts) {
    this.uri = uri;
    this.opts = opts;

    var tt = require('twitter-rest-lite');

    this.api = tt.API(this.opts);
  }

  //
  // <a name='retweets'></a>
  // Public: returns a collection of the 100 most recent retweets on specified tweet
  // ----------------------------------------------------
  //
  // #### Parameters
  //
  // + **id**: Status ID
  // + **params**: Object with params:
  //   - **count**
  //   - **trim_user**
  // + **callback**: Callback Function
  //
  // #### Returns
  //
  // A callback with an Error object as first parameter if there was any
  // (otherwise just `null`) and an Array with tweets as second parameter.
  //
  // #### Code
  Tweets.prototype.retweets = function(id, params, callback) {
    var self = this;

    if (id == null) {
      return callback(new Error(
        'Twitter:Tweets.retweets() requires an ID to be provided'
      ));
    }

    self.api.get('/statuses/retweets/' + id + '.json', params, callback);
  };

  //
  // <a name='show'></a>
  // Public: returns a single tweet
  // ------------------------------
  //
  // #### Parameters
  //
  // + id                  - Status ID
  // + params              - Object with params:
  //   - trim_user
  //   - include_my_retweet
  //   - include_entities
  // + callback            - Callback Function
  //
  // #### Returns
  // Returns a callback with an Error object as first parameter if there was any
  // (otherwise just `null`) and a Tweet object as second parameter.
  //
  // #### Code
  Tweets.prototype.show = function(id, params, callback) {
    var self = this;

    if (id == null) {
      return callback(new Error(
        'Twitter:Tweets.show() requires and ID to be provided'
      ));
    }

    self.api.get('/statuses/show/' + id + '.json', params, callback);
  };

  //
  // <a name='destroy'></a>
  // Public: destroy a single tweet
  // ------------------------------
  //
  // This only works with `oauth_token` from the same user.
  //
  // #### Parameters
  //
  // + id                  - Status ID
  // + params              - Object with params:
  //   - trim_user
  // + callback            - Callback Function
  //
  // #### Returns
  //
  // Returns a callback with an Error object as first parameter if there was any
  // (otherwise just `null`) and a Tweet object of the removed status as second
  // parameter.
  //
  // #### Code
  Tweets.prototype.destroy = function(id, params, callback) {
    var self = this;

    if (id == null) {
      return callback(new Error(
        'Twitter:Tweets.destroy() requires an ID to be provided'
      ));
    }

    self.api.post('/statuses/destroy/' + id + '.json', params, callback);
  };

  //
  // <a name='update'></a>
  // Public: creates a tweet
  // -----------------------
  //
  // This only works with `oauth_token` from the same user.
  //
  // #### Parameters
  //
  // + params              - Object with params:
  //   - status: [Required]
  // + callback            - Callback Function
  //
  // #### Code
  Tweets.prototype.update = function(params, callback) {
    var self = this;

    if ((params == null) || (params.status == null) || typeof params.status !== 'string' || (params.status === '')) {
      return callback(new Error(
        'Twitter:Tweets.update() requires params.status to be defined'
      ));
    }

    if (params.status.length > 140) {
      return callback(new Error(
        'Twitter:Tweets.update(): status is longer than 140 characters'
      ));
    }

    self.api.post('/statuses/update.json', params, callback);
  };

  //
  // <a name='retweet'></a>
  // Public: retweets an status
  // --------------------------
  //
  // #### Parameters
  //
  // + id                    - ID of the status to be retweeted
  // + params                - Object with params:
  // + callback              - Callback Function
  //
  // #### Code
  Tweets.prototype.retweet = function(id, params, callback) {
    var self = this;

    if (id == null) {
      return callback(new Error(
        'Twitter:Tweets.retweet() requires an ID to be provided'
      ));
    }

    self.api.post('/statuses/retweet/' + id + '.json', params, callback);
  };

  //
  // <a name='updateWithMedia'></a>
  // TODO: Public: update with media
  // -------------------------------
  //
  // #### Code
  Tweets.prototype.updateWithMedia = function() {
    var self = this;

    /* FIXME: IMPLEMENT! */
  };

  //
  // <a name='oembed'></a>
  // Public: returns HTML for embedding tweets in websites
  // -----------------------------------------------------
  //
  // + `params`                  - Object with params:
  //   - `id`: [Required if `url` is not given]
  //   - `url`: [Required if `id` is not given]
  // + `callback`                - Callback Function
  //
  // #### Code
  Tweets.prototype.oembed = function(params, callback) {
    var self = this;

    if ((params.id == null) && (params.url == null)) {
      return callback(new Error(
        'Twitter:Tweets.oembed() requires either id or url on the params'
      ));
    }

    self.api.get('/statuses/oembed.json', params, callback);
  };

  //
  // <a name='retweeters'></a>
  // Public: get a list of retweeters by ID
  // --------------------------------------
  //
  // + `params`                    - Object with params:
  //   - `id`
  // + `callback`                  - Callback Function
  //
  // #### Code
  Tweets.prototype.retweeters = function(params, callback) {
    var self = this;

    if (params.id == null) {
      return callback(new Error(
        'Twitter:Tweets.retweeters() requires an id on the params'
      ));
    }

    self.api.get('/statuses/retweeters/ids.json', params, callback);
  };

  return Tweets;
})();
