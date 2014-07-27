'use strict';
var tt = require('twitter-rest-lite');
var helper = require('twitter-rest-lite').helper;
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

//
// <a name='constructor'></a>
// Constructor
// -----------
//
// #### Code 
function Tweets(uri, opts) {
  this.api = tt.API(opts);
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
  if (helper.check(id, 'string', '', 'id required', callback))
    return;

  this.api.get('/statuses/retweets/' + id + '.json', params, callback);
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
  if (!helper.check(id, 'string', '', 'id required', callback))
    this.api.get('/statuses/show/' + id + '.json', params, callback);
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
  if (!helper.check(id, 'string', '', 'ID is required', callback))
    this.api.post('/statuses/destroy/' + id + '.json', params, callback);
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
  if (helper.check(params, 'object', {}, 'Params is empty', callback))
    return;

  if (helper.check(params.status, 'string', '', 'Status is empty', callback))
    return;

  if (params.status.length > 140)
    return helper.callError('Status\'s longer than 140 chars', callback);

  this.api.post('/statuses/update.json', params, callback);
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
  if (!helper.check(id, 'string', '', 'id not provided', callback))
    this.api.post('/statuses/retweet/' + id + '.json', params, callback);
};

//
// <a name='updateWithMedia'></a>
// TODO: Public: update with media
// -------------------------------
//
// #### Code
Tweets.prototype.updateWithMedia = function() {
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
  if (helper.check(params, 'object', {}, 'Params not defined', callback))
    return;

  if ((params.id == null) && (params.url == null))
    return helper.callError('Requires either id or url on the params', callback);

  this.api.get('/statuses/oembed.json', params, callback);
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
  if (helper.check(params, 'object', {}, 'Requires params', callback))
    return;

  if (!helper.check(params.id, 'string', '', 'Requires params.id', callback))
    this.api.get('/statuses/retweeters/ids.json', params, callback);
};

module.exports = Tweets;
