'use strict';
var tt = require('twitter-rest-lite');
var helper = require('twitter-rest-lite').helper;
//
// <a name='constructor'></a>
// Constructor
// -----------
//
// #### Code 
function DirectMessages(uri, opts) {
  this.api = tt.API(opts);
}

DirectMessages.prototype.list = function(params, callback) {
  if (params == null)
    params = {};

  this.api.get('/direct_messages.json', params, callback);
};

DirectMessages.prototype.sent = function(params, callback) {
  if (params == null)
    params = {};

  this.api.get('/direct_messages/sent.json', params, callback);
};

DirectMessages.prototype.show = function(params, callback) {
  if (helper.check(params, 'object', {}, 'There\'s no params defined', callback))
    return;

  if (!params.id)
    return helper.callError('Id should be defined', callback);

  this.api.get('/direct_messages/show.json', params, callback);
};

DirectMessages.prototype.new = function(params, callback) {
  if (helper.check(params, 'object', {}, 'There\'s no params defined', callback))
    return;

  if (!params.text)
    return helper.callError('The text of your direct message should be defined', callback);

  if (!params.user_id && !params.screen_name)
    return helper.callError('User_id or screen_name should be defined', callback);

  this.api.post('/direct_messages/new.json', params, callback);
};

DirectMessages.prototype.destroy = function(params, callback) {
  if (helper.check(params, 'object', {}, 'There\'s no params defined', callback))
    return;

  if (!params.id)
    return helper.callError('Id should be defined', callback);

  this.api.post('/direct_messages/destroy.json', params, callback);
};

module.exports = DirectMessages;
