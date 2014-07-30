'use strict';
var tt = require('twitter-rest-lite');
var helper = require('twitter-rest-lite').helper;
//
// Module: DirectMessages
// ======================
//
// Convenience methods to interact with direct messages.
//
// Methods
// -------
//
// + [Constructor/Initialize](#constructor)
// + [List received DMs](#list)
// + [List sent DMs](#sent)
// + [Show a single DM](#show)
// + [Send a new DM](#new)
// + [Delete a DM](#destroy)
//
// Usage
// -----
//
// ```js
// var TwitterLib = require('twitter-rest');
// var direct_messages = new TwitterLib.DirectMessages(var_with_config);
//
// direct_messages.list(params, callback);
// direct_messages.sent(params, callback);
// direct_messages.show(params, callback);
// direct_messages.new(params, callback);
// direct_messages.destroy(params, callback);
// ```
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
// An `Object` with methods `list`, `sent`, `show`, `new` and `destroy`.
//
// #### Code
//
function DirectMessages(uri, opts) {
  this.api = tt.API(opts);
}

//
// <a name='list'></a>
// Public: get received direct messages
// ------------------------------------
//
// This only works with `oauth_token` from the same user.
//
// #### Parameters
//
// + `params`            - Object with params:
//   - `since_id`
//   - `max_id`
//   - `count`
//   - `include_entities`
//   - `skip_status`
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
// direct_messages.list(params, function (err, res) {
//   if (err)
//     throw err;
//
//   console.log(res);
// });
// ```
//
// #### Code
//
DirectMessages.prototype.list = function(params, callback) {
  if (params == null)
    params = {};

  this.api.get('/direct_messages.json', params, callback);
};

//
// <a name='sent'></a>
// Public: get sent direct messages
// --------------------------------
//
// This only works with `oauth_token` from the same user.
//
// #### Parameters
//
// + `params`            - Object with params:
//   - `since_id`
//   - `max_id`
//   - `count`
//   - `page`
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
// direct_messages.sent(params, function (err, res) {
//   if (err)
//     throw err;
//
//   console.log(res);
// });
// ```
//
// #### Code
//
DirectMessages.prototype.sent = function(params, callback) {
  if (params == null)
    params = {};

  this.api.get('/direct_messages/sent.json', params, callback);
};

//
// <a name='show'></a>
// Public: get a single direct messages
// ------------------------------------
//
// This only works with `oauth_token` from the same user.
//
// #### Parameters
//
// + `params`            - Object with params:
//   - `id` - [Required]
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
// var params = { id: 12345678901234567 };
// direct_messages.show(params, function (err, res) {
//   if (err)
//     throw err;
//
//   console.log(res);
// });
// ```
//
// #### Code
//
DirectMessages.prototype.show = function(params, callback) {
  if (helper.check(params, 'object', {}, 'There\'s no params defined', callback))
    return;

  if (!params.id)
    return helper.callError('Id should be defined', callback);

  this.api.get('/direct_messages/show.json', params, callback);
};

//
// <a name='new'></a>
// Public: send a new direct message
// ---------------------------------
//
// This only works with `oauth_token` from the same user.
//
// #### Parameters
//
// + `params`            - Object with params:
//   - `screen_name` - [Required if `user_id` wasn't provided]
//   - `user_id` - [Required if `screen_name` wasn't provided]
//   - `text` - [Required]
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
// var params = {text: 'lorem ipsum', screen_name: 'username'};
// direct_messages.new(params, function (err, res) {
//   if (err)
//     throw err;
//
//   console.log(res);
// });
// ```
//
// #### Code
//
DirectMessages.prototype.new = function(params, callback) {
  if (helper.check(params, 'object', {}, 'There\'s no params defined', callback))
    return;

  if (!params.text)
    return helper.callError('The text of your direct message should be defined', callback);

  if (!params.user_id && !params.screen_name)
    return helper.callError('User_id or screen_name should be defined', callback);

  this.api.post('/direct_messages/new.json', params, callback);
};

//
// <a name='destroy'></a>
// Public: delete a direct message
// -------------------------------
//
// This only works with `oauth_token` from the same user.
//
// #### Parameters
//
// + `params`            - Object with params:
//   - `id` - [Required]
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
// var params = { id: 12345678901234567 };
// direct_messages.destroy(params, function (err, res) {
//   if (err)
//     throw err;
//
//   console.log(res);
// });
// ```
//
// #### Code
//
DirectMessages.prototype.destroy = function(params, callback) {
  if (helper.check(params, 'object', {}, 'There\'s no params defined', callback))
    return;

  if (!params.id)
    return helper.callError('Id should be defined', callback);

  this.api.post('/direct_messages/destroy.json', params, callback);
};

module.exports = DirectMessages;
