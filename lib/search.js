'use strict';
//
// Module: Search
// ==============
//
// Convenience method for searches.
//
// Methods
// -------
//
// + [Constructor/Initialize](#constructor)
// + [Search query](#query)
//
// Usage
// -----
//
// ```js
// var TwitterLib = require('twitter-rest');
// var search = new TwitterLib.Search(var_with_config);
//
// var params = {
//   q: 'term I\'m searching for'
// };
//
// search.query(params, callback);
// ```

//
// <a name='constructor'></a>
// Constructor
// -----------
//
// #### Parameters
//
// + `uri` - base URI's to use (this should be provided by the library itself)
// + `opts` - `Object` with the user-provided params
//   - `consumer_key` - required
//   - `consumer_secret` - required
//   - `token` - required
//   - `token_secret` - required
//
// #### Returns
//
// An `Object` with the method `query`.
//
// #### Code
//
function Search(uri, opts) {
  this.uri = uri;
  this.opts = opts;

  var tt = require('twitter-rest-lite');

  this.api = tt.API(this.opts);
}

//
// <a name='query'></a>
// Public: do a tweets query
// -------------------------
//
// #### Parameters
//
// + `params`              - Object with params:
//   - `q`: [Required]
// + `callback`            - Callback Function
//
// #### Example
//
// ```js
// var q = {
//   q: 'term for the search'
// };
//
// search.query(q, callback);
// ```
//
// #### Code
//
Search.prototype.query = function(params, callback) {
  var self = this;

  if (params.q == null) {
    return callback(new Error(
      'Twitter:Search.query() requires q to be defined in the params'
    ));
  }

  self.api.get('/search/tweets.json', params, callback);
};

module.exports = Search;
