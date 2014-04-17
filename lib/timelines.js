'use strict';
//
// Module: Timelines
// =================
//
// Convenience methods for Timelines actions.
//
// Methods
// -------
//
// + [Constructor/Initialize](#constructor)
// + [User's Mentions](#mentions)
// + [User's Timeline](#user)
// + [User's Home Timeline](#home)
// + [User's retweets Timeline](#retweets)
//
// Usage
// -----
//
// ```js
// var TwitterLib = require('twitter-rest');
// var timeline = new TwitterLib.Timelines(var_with_config);
//
// timeline.mentions(params, callback);
// timeline.user(params, callback);
// timeline.home(params, callback);
// timeline.retweets(params, callback);
// ```
// 
// #### Code
var Timelines;
module.exports = Timelines = (function() {

  //
  // <a name='constructor'></a>
  // Constructor
  // -----------
  //
  // #### Parameters
  //
  // + `uri`    - base URI's to use (this should be provided by the library
  // itself)
  // + `opts`   - `Object` with the user-provided params
  //   - `consumer_key` - required
  //   - `consumer_secret` - required
  //   - `token` - required
  //   - `token_secret` - required
  //
  // #### Returns
  //
  // An `Object` with methods `mentions`, `user`, `home` and `retweets`.
  //
  // #### Code
  //
  function Timelines(uri, opts) {
    this.uri = uri;
    this.opts = opts;

    var tt = require('twitter-rest-lite');

    this.api = tt.API(this.opts);
  }

  //
  // <a name='mentions'></a>
  // Public: get user's mentions
  // ---------------------------
  //
  // This only works with `oauth_token` from the same user.
  //
  // #### Parameters
  //
  // + `params`            - Object with params:
  //   - `count`
  //   - `since_id`
  //   - `max_id`
  //   - `trim_user`
  //   - `contributor_details`
  //   - `include_entities`
  // + `callback`          - Callback Function
  //
  // #### Returns
  //
  // Returns a callback with an Error object as first parameter if there was any
  // (otherwise just `null`) and an Array with tweets as second parameter.
  //
  // #### Example
  //
  // ```js
  // var params = { count: 1 };
  // timeline.mentions(params, function (err, res) {
  //   if (err)
  //     throw err;
  //
  //   console.log(res);
  // });
  // ```
  //
  // #### Code
  //
  Timelines.prototype.mentions = function(params, callback) {
    var self = this;

    if (params == null)
      params = {};

    self.api.get('/statuses/mentions_timeline.json', params, callback);
  };

  //
  // <a name='user'></a>
  // Public: get selected user's timeline
  // ------------------------------------
  //
  // #### Parameters
  //
  // + `params`            - Object with params:
  //   - `screen_name` - [Required if `user_id` wasn't provided]
  //   - `user_id` - [Required if `screen_name` wasn't provided]
  //   - `since_id`
  //   - `count`
  //   - `max_id`
  //   - `trim_user`
  //   - `exclude_replies`
  //   - `contributor_details`
  //   - `include_rts`
  // + `callback`          - Callback Function
  //
  // #### Returns
  //
  // Returns a callback with an Error object as first parameter if there was any
  // (otherwise just `null`) and an Array with tweets as second parameter.
  //
  // #### Example
  //
  // ```js
  // timeline.user({
  //   screen_name: 'random'
  // }, function (err, res) {
  //   if (err)
  //     throw err;
  //
  //   console.log(res);
  // });
  // ```
  //
  // #### Code
  //
  Timelines.prototype.user = function(params, callback) {
    var self = this;

    if ((params.screen_name == null) && (params.user_id == null)) {
      return callback(new Error(
        'Twitter:Timelines.user requires either screen_name or user_id'
      ));
    }

    self.api.get('/statuses/user_timeline.json', params, callback);
  };

  //
  // <a name='home'></a>
  // Public: get user's home timeline
  // --------------------------------
  //
  // This only works with the `oauth_token` from the same user.
  //
  // #### Parameters
  //
  // + `params`            - Object with params:
  //   - `count`
  //   - `since_id`
  //   - `max_id`
  //   - `trim_user`
  //   - `exclude_replies`
  //   - `contributor_details`
  //   - `include_entities`
  // + `callback`          - Callback Function
  //
  // #### Returns
  //
  // Returns a callback with an Error object as first parameter if there was any
  // (otherwise just `null`) and an Array with tweets as second parameter.
  //
  // #### Example
  //
  // ```js
  // timeline.home(null, function (err, res) {
  //   if (err)
  //     throw err;
  //
  //   console.log(res);
  // });
  // ```
  //
  // #### Code
  //
  Timelines.prototype.home = function(params, callback) {
    var self = this;

    if (params == null)
      params = {};

    self.api.get('/statuses/home_timeline.json', params, callback);
  };

  //
  // <a name='retweets'></a>
  // Public: get user's retweets
  // ---------------------------
  //
  // This only works with the `oauth_token` from the same user.
  //
  // #### Parameters
  //
  // + `params`              - Object with params:
  //   - `count`
  //   - `since_id`
  //   - `max_id`
  //   - `trim_user`
  //   - `include_entities`
  //   - `include_user_entities`
  // + `callback`            - Callback Function
  //
  // #### Returns
  //
  // Returns a callback with an Error object as first parameter if there was any
  // (otherwise just `null`) and an Array with tweets as second parameter.
  //
  // #### Example
  //
  // ```js
  // timeline.retweets({}, function (err, response) {
  //   if (err)
  //     throw err;
  //
  //   console.log(response);
  // });
  // ```
  //
  // #### Code
  //
  Timelines.prototype.retweets = function(params, callback) {
    var self = this;

    if (params == null)
      params = {};

    self.api.get('/statuses/retweets_of_me.json', params, callback);
  };

  return Timelines;
})();
