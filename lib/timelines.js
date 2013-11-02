var Timelines,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

/**
 *  Module: Timelines
 *  =================
 *
 *  Convenience methods for Timelines actions.
 **/
module.exports = Timelines = (function() {

  /**
   *  <a name='constructor'></a>
   *  Constructor
   *  -----------
   **/
  function Timelines(uri, opts) {
    this.uri = uri;
    this.opts = opts;

    var tt = require('twitter-rest-lite');

    this.api = tt.API(this.opts);

    // bindings
    this.mentions = __bind(this.mentions, this);
    this.user = __bind(this.user, this);
    this.home = __bind(this.home, this);
    this.retweets = __bind(this.retweets, this);
  };

  /**
   *  <a name='mentions'></a>
   *  Public: get user's mentions
   *  ---------------------------
   *
   *  This only works with `oauth_token` from the same user.
   *
   *  params            - Object with params:
   *  - count
   *  - since_id
   *  - max_id
   *  - trim_user
   *  - contributor_details
   *  - include_entities
   *  callback          - Callback Function
   *
   *  Returns a callback with an Error object as first parameter if there was any
   *  (otherwise just `null`) and an Array with tweets as second parameter.
   **/
  Timelines.prototype.mentions = function(params, callback) {
    var self = this;

    self.api.get('/statuses/mentions_timeline.json', params, callback);
  };

  /**
   *  <a name='user'></a>
   *  Public: get selected user's timeline
   *  ------------------------------------
   *
   *  params            - Object with params:
   *  - screen_name: [Required if `user_id` wasn't provided]
   *  - user_id: [Required if `screen_name` wasn't provided]
   *  - since_id
   *  - count
   *  - max_id
   *  - trim_user
   *  - exclude_replies
   *  - contributor_details
   *  - include_rts
   *  callback          - Callback Function
   *
   *  Returns a callback with an Error object as first parameter if there was any
   *  (otherwise just `null`) and an Array with tweets as second parameter.
   **/
  Timelines.prototype.user = function(params, callback) {
    var self = this;

    if ((params.screen_name == null) && (params.user_id == null)) {
      return callback(new Error(
        'Twitter:Timelines.user requires either screen_name or user_id'
      ));
    }

    self.api.get('/statuses/user_timeline.json', params, callback);
  };

  /**
   *  <a name='home'></a>
   *  Public: get user's home timeline
   *  --------------------------------
   *
   *  This only works with the `oauth_token` from the same user.
   *
   *  params            - Object with params:
   *  - count
   *  - since_id
   *  - max_id
   *  - trim_user
   *  - exclude_replies
   *  - contributor_details
   *  - include_entities
   *  callback          - Callback Function
   *
   *  Returns a callback with an Error object as first parameter if there was any
   *  (otherwise just `null`) and an Array with tweets as second parameter.
   **/
  Timelines.prototype.home = function(params, callback) {
    var self = this;

    self.api.get('/statuses/home_timeline.json', params, callback);
  };

  /**
   *  <a name='retweets'></a>
   *  Public: get user's retweets
   *  ---------------------------
   *
   *  This only works with the `oauth_token` from the same user.
   *
   *  params              - Object with params:
   *  - count
   *  - since_id
   *  - max_id
   *  - trim_user
   *  - include_entities
   *  - include_user_entities
   *  callback            - Callback Function
   *
   *  Returns a callback with an Error object as first parameter if there was any
   *  (otherwise just `null`) and an Array with tweets as second parameter.
   **/
  Timelines.prototype.retweets = function(params, callback) {
    var self = this;

    self.api.get('/statuses/retweets_of_me.json', params, callback);
  };

  return Timelines;
})();
